/**
 * Test Gmail SMTP — run from server folder:
 *   node scripts/test-smtp.js
 * Uses server/.env (or env vars on Render shell).
 */
require('dotenv').config({ path: require('path').join(__dirname, '../.env') });
const { verifySmtpConnection, sendContactLeadEmail, isSmtpConfigured } = require('../utils/email');

async function main() {
  if (!isSmtpConfigured()) {
    console.error('SMTP_USER / SMTP_PASS not set in .env');
    process.exit(1);
  }
  const ok = await verifySmtpConnection();
  if (!ok) {
    console.error('SMTP verify failed — check App Password and 2FA on Google account');
    process.exit(1);
  }
  const fakeLead = {
    _id: 'test-id',
    name: 'SMTP Test',
    email: 'test@example.com',
    phone: '+123',
    company: 'Allied Axis',
    service: 'growth-launch',
    message: 'If you receive this, contact form emails are working.',
    createdAt: new Date(),
  };
  await sendContactLeadEmail(fakeLead);
  console.log('Test email sent to', process.env.CONTACT_NOTIFY_EMAIL || process.env.SMTP_USER);
  process.exit(0);
}

main().catch((err) => {
  console.error(err.message);
  process.exit(1);
});
