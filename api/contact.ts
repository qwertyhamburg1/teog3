// @ts-nocheck

function escapeHtml(str = '') {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// In-memory IP rate limiter: Max 3 requests per 10 minutes per IP
const rateLimitMap = new Map();
const RATE_LIMIT_WINDOW = 10 * 60 * 1000; // 10 minutes in ms
const MAX_REQUESTS_PER_WINDOW = 3;

function isRateLimited(ip) {
  const now = Date.now();
  const userData = rateLimitMap.get(ip);

  if (!userData) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    return false;
  }

  if (now > userData.resetTime) {
    // Window expired, reset counter
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    return false;
  }

  if (userData.count >= MAX_REQUESTS_PER_WINDOW) {
    return true; // Limit exceeded
  }

  userData.count += 1;
  return false;
}

// Clean up stale IP records every hour to prevent memory growth
setInterval(() => {
  const now = Date.now();
  for (const [ip, data] of rateLimitMap.entries()) {
    if (now > data.resetTime) {
      rateLimitMap.delete(ip);
    }
  }
}, 60 * 60 * 1000);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // 1. Extract visitor IP
  const clientIp = (req.headers['x-forwarded-for'] || req.socket.remoteAddress || 'unknown')
    .toString()
    .split(',')[0]
    .trim();

  // 2. IP Rate Limit check
  if (isRateLimited(clientIp)) {
    return res.status(429).json({
      error: 'Too many messages sent. Please wait a few minutes before trying again.',
    });
  }

  const { name, email, projectType, message, honeypot } = req.body || {};

  // 3. Honeypot bot trap
  if (honeypot) {
    return res.status(200).json({ success: true });
  }

  // 4. Required field presence checks
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  // 5. Length constraints
  if (
    typeof name !== 'string' || name.length > 100 ||
    typeof email !== 'string' || email.length > 254 ||
    (projectType && (typeof projectType !== 'string' || projectType.length > 100)) ||
    typeof message !== 'string' || message.length > 3000
  ) {
    return res.status(400).json({ error: 'Input exceeds permitted length' });
  }

  // 6. Email format validation
  if (!EMAIL_REGEX.test(email.trim())) {
    return res.status(400).json({ error: 'Invalid email address' });
  }

  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!botToken || !chatId) {
    console.error('Telegram environment variables not set in Vercel');
    return res.status(500).json({ error: 'Service temporarily unavailable' });
  }

  // 7. Sanitize inputs
  const safeName = escapeHtml(name.trim());
  const safeEmail = escapeHtml(email.trim());
  const safeType = escapeHtml((projectType || 'Not specified').trim());
  const safeMessage = escapeHtml(message.trim());

  const text = `📬 <b>New Contact Form Submission</b>\n\n<b>Name:</b> ${safeName}\n<b>Email:</b> ${safeEmail}\n<b>Project Type:</b> ${safeType}\n<b>Message:</b> ${safeMessage}`;

  try {
    const telegramRes = await fetch(
      `https://api.telegram.org/bot${botToken}/sendMessage`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: chatId,
          text,
          parse_mode: 'HTML',
        }),
      }
    );

    const telegramData = await telegramRes.json();

    if (!telegramRes.ok || !telegramData.ok) {
      console.error('Telegram API error:', telegramData);
      return res.status(500).json({ error: 'Failed to send message' });
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Server error sending to Telegram:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
