// @ts-nocheck

function escapeHtml(str = '') {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, projectType, message, honeypot } = req.body || {};

  // Honeypot check: If invisible bot field is filled, silently succeed without notifying Telegram
  if (honeypot) {
    return res.status(200).json({ success: true });
  }

  // Required field checks
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  // Length constraints to prevent payload flooding
  if (
    typeof name !== 'string' || name.length > 100 ||
    typeof email !== 'string' || email.length > 254 ||
    (projectType && (typeof projectType !== 'string' || projectType.length > 100)) ||
    typeof message !== 'string' || message.length > 3000
  ) {
    return res.status(400).json({ error: 'Input exceeds permitted length' });
  }

  // Email format validation
  if (!EMAIL_REGEX.test(email.trim())) {
    return res.status(400).json({ error: 'Invalid email address' });
  }

  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!botToken || !chatId) {
    console.error('Telegram environment variables not set in Vercel');
    return res.status(500).json({ error: 'Service temporarily unavailable' });
  }

  // Sanitize all inputs before building the HTML message
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
