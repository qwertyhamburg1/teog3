// @ts-nocheck
export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, projectType, message } = req.body || {};

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!botToken) {
    return res.status(500).json({ error: 'TELEGRAM_BOT_TOKEN not set' });
  }

  if (!chatId) {
    return res.status(500).json({ error: 'TELEGRAM_CHAT_ID not set' });
  }

  const text = `
📬 <b>New Contact Form Submission</b>

<b>Name:</b> ${name}
<b>Email:</b> ${email}
<b>Project Type:</b> ${projectType || 'Not specified'}
<b>Message:</b> ${message}
`;

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
      return res.status(500).json({
        error: 'Telegram API error',
        details: telegramData.description || 'Unknown error',
      });
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error sending to Telegram:', error);
    return res.status(500).json({ error: 'Internal server error', details: error.message });
  }
}
