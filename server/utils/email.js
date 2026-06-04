const nodemailer = require('nodemailer');
const logger = require('./logger');

const SERVICE_LABELS = {
  branding: 'Branding & Creative',
  website: 'Website & Technical',
  'ai-automation': 'AI Workflow & Automation',
  marketing: 'Performance Marketing',
  seo: 'SEO & Organic',
  'lead-gen': 'Lead Generation',
  social: 'Social Media Management',
  strategy: 'Strategy & Advisory',
  'essential-launch': 'Essential Launch',
  'growth-launch': 'Growth Launch',
  'complete-launch': 'Complete Launch',
  b2b: 'B2B Growth',
  other: 'Other',
};

function smtpPassword() {
  return String(process.env.SMTP_PASS || '')
    .trim()
    .replace(/^["']|["']$/g, '')
    .replace(/\s/g, '');
}

function isSmtpConfigured() {
  const user = String(process.env.SMTP_USER || '').trim();
  const pass = smtpPassword();
  if (!user || !pass) return false;
  if (user === 'your-email@gmail.com' || pass === 'your-app-password') return false;
  return true;
}

/** Fresh transport per send — avoids stale pooled connections on Render. */
function createSmtpTransporter() {
  const port = Number(process.env.SMTP_PORT) || 587;
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port,
    secure: port === 465,
    requireTLS: port === 587,
    auth: {
      user: String(process.env.SMTP_USER || '').trim(),
      pass: smtpPassword(),
    },
    pool: false,
    connectionTimeout: 20000,
    greetingTimeout: 20000,
    socketTimeout: 20000,
    tls: { minVersion: 'TLSv1.2' },
  });
}

async function withSmtpTransport(sendFn) {
  const transport = createSmtpTransporter();
  try {
    return await sendFn(transport);
  } finally {
    transport.close();
  }
}

/** Call once on server boot — logs whether Gmail SMTP credentials work on Render. */
async function verifySmtpConnection() {
  if (!isSmtpConfigured()) {
    logger.warn(
      'SMTP not configured — set SMTP_USER + SMTP_PASS (Gmail App Password) and CONTACT_NOTIFY_EMAIL on Render'
    );
    return false;
  }
  try {
    await withSmtpTransport((transport) => transport.verify());
    const to = process.env.CONTACT_NOTIFY_EMAIL || process.env.SMTP_USER;
    logger.info(`SMTP ready — contact leads will be sent to ${to}`);
    return true;
  } catch (err) {
    logger.error(`SMTP verification failed: ${err.message}`);
    return false;
  }
}

function toEmailContact(contact) {
  const doc = contact?.toObject ? contact.toObject() : contact;
  return {
    _id: doc._id,
    name: doc.name,
    email: doc.email,
    phone: doc.phone,
    company: doc.company,
    service: doc.service,
    budget: doc.budget,
    message: doc.message,
    createdAt: doc.createdAt,
  };
}

function formatContactHtml(contact) {
  const service = contact.service
    ? SERVICE_LABELS[contact.service] || contact.service
    : '—';
  const company = contact.company || '—';
  const phone = contact.phone || '—';
  const submitted = contact.createdAt
    ? new Date(contact.createdAt).toLocaleString('en-GB', { timeZone: 'Asia/Dubai' })
    : new Date().toLocaleString('en-GB', { timeZone: 'Asia/Dubai' });

  return `
    <div style="font-family: Arial, sans-serif; max-width: 560px; color: #1a1a1a;">
      <h2 style="color: #e05c26; margin: 0 0 16px;">New contact form lead</h2>
      <p style="margin: 0 0 20px; color: #555;">A visitor submitted the Allied Axis contact form.</p>
      <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
        <tr><td style="padding: 8px 0; color: #888; width: 120px;">Name</td><td style="padding: 8px 0;"><strong>${escapeHtml(contact.name)}</strong></td></tr>
        <tr><td style="padding: 8px 0; color: #888;">Email</td><td style="padding: 8px 0;"><a href="mailto:${escapeHtml(contact.email)}">${escapeHtml(contact.email)}</a></td></tr>
        <tr><td style="padding: 8px 0; color: #888;">Phone</td><td style="padding: 8px 0;">${escapeHtml(phone)}</td></tr>
        <tr><td style="padding: 8px 0; color: #888;">Company</td><td style="padding: 8px 0;">${escapeHtml(company)}</td></tr>
        <tr><td style="padding: 8px 0; color: #888;">Service</td><td style="padding: 8px 0;">${escapeHtml(service)}</td></tr>
        <tr><td style="padding: 8px 0; color: #888;">Budget</td><td style="padding: 8px 0;">${escapeHtml(contact.budget || '—')}</td></tr>
        <tr><td style="padding: 8px 0; color: #888; vertical-align: top;">Message</td><td style="padding: 8px 0; white-space: pre-wrap;">${escapeHtml(contact.message)}</td></tr>
        <tr><td style="padding: 8px 0; color: #888;">Submitted</td><td style="padding: 8px 0;">${escapeHtml(submitted)}</td></tr>
      </table>
      <p style="margin: 24px 0 0; font-size: 12px; color: #999;">Lead ID: ${contact._id}</p>
    </div>
  `;
}

function formatContactText(contact) {
  const service = contact.service
    ? SERVICE_LABELS[contact.service] || contact.service
    : '—';
  return [
    'New contact form lead — Allied Axis',
    '',
    `Name: ${contact.name}`,
    `Email: ${contact.email}`,
    `Phone: ${contact.phone || '—'}`,
    `Company: ${contact.company || '—'}`,
    `Service: ${service}`,
    `Budget: ${contact.budget || '—'}`,
    '',
    'Message:',
    contact.message,
    '',
    `Lead ID: ${contact._id}`,
  ].join('\n');
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/**
 * Notify company inbox when a contact form is submitted.
 * @returns {Promise<boolean>} true if sent, false if SMTP skipped
 */
async function sendContactLeadEmail(contact) {
  if (!isSmtpConfigured()) {
    logger.warn('SMTP not configured — contact saved but notification email skipped');
    return false;
  }

  const lead = toEmailContact(contact);
  const to = String(process.env.CONTACT_NOTIFY_EMAIL || process.env.SMTP_USER || '').trim();
  const fromName = process.env.FROM_NAME || 'Allied Axis';
  const fromAddress = String(process.env.SMTP_USER || '').trim();

  logger.info(`Sending contact lead email to ${to} (from ${fromAddress}) lead=${lead._id}`);

  const info = await withSmtpTransport((transport) =>
    transport.sendMail({
      from: `"${fromName}" <${fromAddress}>`,
      to,
      replyTo: lead.email,
      subject: `[Allied Axis] New lead: ${lead.name}${lead.company ? ` — ${lead.company}` : ''}`,
      text: formatContactText(lead),
      html: formatContactHtml(lead),
    })
  );

  logger.info(`Contact notification delivered to ${to} — ${info.messageId}`);
  return true;
}

function formatTeamApplicationHtml(application) {
  const role = application.role || '—';
  const submitted = application.createdAt
    ? new Date(application.createdAt).toLocaleString('en-GB', { timeZone: 'Asia/Dubai' })
    : new Date().toLocaleString('en-GB', { timeZone: 'Asia/Dubai' });

  return `
    <div style="font-family: Arial, sans-serif; max-width: 560px; color: #1a1a1a;">
      <h2 style="color: #e05c26; margin: 0 0 16px;">New team application</h2>
      <p style="margin: 0 0 20px; color: #555;">Someone applied via the Allied Axis careers form. Their CV is attached.</p>
      <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
        <tr><td style="padding: 8px 0; color: #888; width: 120px;">Name</td><td style="padding: 8px 0;"><strong>${escapeHtml(application.name)}</strong></td></tr>
        <tr><td style="padding: 8px 0; color: #888;">Email</td><td style="padding: 8px 0;"><a href="mailto:${escapeHtml(application.email)}">${escapeHtml(application.email)}</a></td></tr>
        <tr><td style="padding: 8px 0; color: #888;">Role</td><td style="padding: 8px 0;">${escapeHtml(role)}</td></tr>
        <tr><td style="padding: 8px 0; color: #888;">CV file</td><td style="padding: 8px 0;">${escapeHtml(application.cvFileName)}</td></tr>
        <tr><td style="padding: 8px 0; color: #888;">Submitted</td><td style="padding: 8px 0;">${escapeHtml(submitted)}</td></tr>
      </table>
      <p style="margin: 24px 0 0; font-size: 12px; color: #999;">Application ID: ${application._id}</p>
    </div>
  `;
}

function formatTeamApplicationText(application) {
  return [
    'New team application — Allied Axis',
    '',
    `Name: ${application.name}`,
    `Email: ${application.email}`,
    `Role: ${application.role || '—'}`,
    `CV: ${application.cvFileName} (attached)`,
    '',
    `Application ID: ${application._id}`,
  ].join('\n');
}

async function sendTeamApplicationEmail(application, file) {
  if (!isSmtpConfigured()) {
    logger.warn('SMTP not configured — application saved but notification email skipped');
    return false;
  }

  const to = String(process.env.CONTACT_NOTIFY_EMAIL || process.env.SMTP_USER || '').trim();
  const fromName = process.env.FROM_NAME || 'Allied Axis';
  const fromAddress = String(process.env.SMTP_USER || '').trim();

  logger.info(`Sending team application email to ${to} (from ${fromAddress})`);

  const info = await withSmtpTransport((transport) =>
    transport.sendMail({
      from: `"${fromName}" <${fromAddress}>`,
      to,
      replyTo: application.email,
      subject: `[Allied Axis] Job application: ${application.name}${application.role ? ` — ${application.role}` : ''}`,
      text: formatTeamApplicationText(application),
      html: formatTeamApplicationHtml(application),
      attachments: [
        {
          filename: file.originalname || application.cvFileName || 'cv.pdf',
          content: file.buffer,
          contentType: file.mimetype || application.cvMimeType,
        },
      ],
    })
  );

  logger.info(`Team application notification delivered to ${to} — ${info.messageId}`);
  return true;
}

module.exports = {
  sendContactLeadEmail,
  sendTeamApplicationEmail,
  isSmtpConfigured,
  verifySmtpConnection,
};
