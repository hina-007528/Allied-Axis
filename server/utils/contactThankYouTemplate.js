const { emailIconSrc } = require('./emailIconAttachments');

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

const VARIANTS = {
  contact: {
    subject: (brand) => `Thank you for contacting ${brand.name} — we'll be in touch soon`,
    headline: (firstName) => `Thank you, ${firstName}!`,
    subheadline:
      'Your message has been received. Our team will review your enquiry and respond within <strong style="color:#ffffff;">24 hours</strong> — usually much sooner.',
    intro: (brand) =>
      `We appreciate you reaching out to <strong>${brand.name}</strong>. We build AI-powered revenue systems for B2B businesses across ${brand.regions} — and we are excited to learn more about your goals.`,
    steps: [
      { num: '01', title: 'We review', text: 'your enquiry and goals.' },
      { num: '02', title: 'We respond', text: 'with clear next steps.' },
      { num: '03', title: 'Free consult', text: 'if we are a good fit.' },
    ],
    primaryCta: { label: 'Chat on WhatsApp', hrefKey: 'whatsappContact' },
    secondaryCta: { label: 'Explore Services', hrefKey: 'services' },
    whatsappText: 'Hi, I just submitted the contact form. Looking forward to hearing from you.',
  },
  audit: {
    subject: (brand) => `Your free website audit request — ${brand.name}`,
    headline: (firstName) => `Audit booked, ${firstName}!`,
    subheadline:
      'Your <strong style="color:#ffffff;">free website audit</strong> request is confirmed. We will review your site and share actionable insights within <strong style="color:#ffffff;">24–48 hours</strong>.',
    intro: (brand) =>
      `Thank you for requesting a complimentary audit from <strong>${brand.name}</strong>. Our strategists will assess your digital presence and highlight quick wins for leads, conversions, and brand clarity.`,
    steps: [
      { num: '01', title: 'Audit queued', text: 'your request enters our review pipeline.' },
      { num: '02', title: 'We analyse', text: 'your site, funnel, and positioning.' },
      { num: '03', title: 'You receive', text: 'clear recommendations by email.' },
    ],
    primaryCta: { label: 'Chat on WhatsApp', hrefKey: 'whatsappAudit' },
    secondaryCta: { label: 'View Our Work', hrefKey: 'portfolio' },
    whatsappText: 'Hi, I just requested a free website audit. Looking forward to your feedback.',
  },
  apply: {
    subject: (brand) => `Application received — ${brand.name} Careers`,
    headline: (firstName) => `Thanks for applying, ${firstName}!`,
    subheadline:
      'Your application has been received. Our team will review your profile and CV, then reach out if there is a strong match within <strong style="color:#ffffff;">5–7 business days</strong>.',
    intro: (brand) =>
      `Thank you for your interest in joining <strong>${brand.name}</strong>. We review every application carefully and appreciate the time you took to apply.`,
    steps: [
      { num: '01', title: 'Logged', text: 'your application is in our system.' },
      { num: '02', title: 'We review', text: 'your CV and experience.' },
      { num: '03', title: 'We contact', text: 'you with next steps if shortlisted.' },
    ],
    primaryCta: { label: 'Chat on WhatsApp', hrefKey: 'whatsappApply' },
    secondaryCta: { label: 'About Allied Axis', hrefKey: 'about' },
    whatsappText: 'Hi, I just submitted a job application. Happy to share more if needed.',
  },
};

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function getBrandConfig() {
  const site = String(process.env.CLIENT_URL || 'https://alliedaxis.digital').replace(/\/$/, '');
  const wa = 'https://wa.me/971585882972';
  return {
    name: process.env.FROM_NAME || 'Allied Axis',
    site,
    email: process.env.FROM_EMAIL || 'info@alliedaxis.digital',
    phoneUae: '+971 58 588 2972',
    phonePk: '+92 325 1518471',
    whatsapp: wa,
    linkedin: 'https://www.linkedin.com/company/alliedaxisdigital/',
    instagram: 'https://www.instagram.com/alliedaxis.digital',
    tiktok: 'https://www.tiktok.com/@alliedaxis.digital',
    facebook: 'https://www.facebook.com/share/1BNmoRzsfN/',
    regions: 'UAE · UK · Pakistan',
    links: {
      services: `${site}/services`,
      portfolio: `${site}/portfolio`,
      about: `${site}/about`,
      team: `${site}/team`,
      whatsappContact: `${wa}?text=${encodeURIComponent('Hi, I just submitted the contact form. Looking forward to hearing from you.')}`,
      whatsappAudit: `${wa}?text=${encodeURIComponent('Hi, I just requested a free website audit. Looking forward to your feedback.')}`,
      whatsappApply: `${wa}?text=${encodeURIComponent('Hi, I just submitted a job application. Happy to share more if needed.')}`,
    },
  };
}

function summaryTableHtml(title, rows) {
  const rowHtml = rows
    .map(
      ([label, value]) => `<tr>
        <td style="padding:10px 0;color:#64748b;font-size:14px;width:130px;vertical-align:top;">${escapeHtml(label)}</td>
        <td style="padding:10px 0;color:#0f172a;font-size:14px;font-weight:600;line-height:1.5;">${value}</td>
      </tr>`
    )
    .join('');

  return `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:12px;padding:4px 18px;margin-bottom:24px;">
    <tr>
      <td colspan="2" style="padding:14px 0 6px;font-size:12px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:#f05a28;">${escapeHtml(title)}</td>
    </tr>
    ${rowHtml}
  </table>`;
}

function iconImg(file, alt, size = 22) {
  const src = emailIconSrc(file);
  return `<img src="${src}" alt="${escapeHtml(alt)}" width="${size}" height="${size}" style="display:block;border:0;outline:none;" />`;
}

function iconLinkChip(brand, href, file, label) {
  return `<td align="center" style="padding:0 5px;">
    <a href="${href}" target="_blank" rel="noopener noreferrer" title="${escapeHtml(label)}" style="display:inline-block;text-decoration:none;">
      <table role="presentation" cellpadding="0" cellspacing="0" style="width:44px;height:44px;background:#f05a28;border-radius:50%;">
        <tr>
          <td align="center" valign="middle" style="width:44px;height:44px;border-radius:50%;">
            ${iconImg(file, label, 22)}
          </td>
        </tr>
      </table>
    </a>
  </td>`;
}

function socialIconsHtml(brand) {
  const items = [
    { href: brand.linkedin, file: 'linkedin.png', label: 'LinkedIn' },
    { href: brand.instagram, file: 'instagram.png', label: 'Instagram' },
    { href: brand.tiktok, file: 'tiktok.png', label: 'TikTok' },
    { href: brand.facebook, file: 'facebook.png', label: 'Facebook' },
    { href: brand.site, file: 'globe.png', label: 'Website' },
  ];

  return `<table role="presentation" cellpadding="0" cellspacing="0" align="center" style="margin:0 auto;">
    <tr>
      ${items.map((item) => iconLinkChip(brand, item.href, item.file, item.label)).join('')}
    </tr>
  </table>`;
}

function contactLinksHtml(brand) {
  const rows = [
    {
      file: 'email.png',
      label: 'Email',
      href: `mailto:${brand.email}`,
      text: brand.email,
    },
    {
      file: 'whatsapp.png',
      label: 'UAE WhatsApp',
      href: brand.whatsapp,
      text: brand.phoneUae,
    },
    {
      file: 'phone.png',
      label: 'Pakistan',
      href: 'tel:+923251518471',
      text: brand.phonePk,
    },
  ];

  return rows
    .map(
      (row) => `<tr>
        <td style="padding:8px 0;vertical-align:middle;width:36px;">
          <table role="presentation" cellpadding="0" cellspacing="0" style="width:32px;height:32px;background:#fff7f3;border:1px solid #fed7c7;border-radius:8px;">
            <tr>
              <td align="center" valign="middle" style="width:32px;height:32px;">
                <a href="${row.href}" style="text-decoration:none;display:block;line-height:0;">
                  ${iconImg(row.file, row.label, 18)}
                </a>
              </td>
            </tr>
          </table>
        </td>
        <td style="padding:8px 0 8px 10px;vertical-align:middle;">
          <a href="${row.href}" style="color:#334155;font-size:14px;font-weight:600;text-decoration:none;">${escapeHtml(row.text)}</a>
        </td>
      </tr>`
    )
    .join('');
}

function stepsHtml(steps) {
  const cells = steps
    .map(
      (step, i) => `<td width="33%" style="padding:12px ${i === 1 ? '8px' : i === 0 ? '8px 12px 0' : '0 0 12px 8px'};vertical-align:top;">
        <p style="margin:0 0 4px;font-size:22px;font-weight:800;color:#f05a28;">${step.num}</p>
        <p style="margin:0;font-size:13px;line-height:1.5;color:#475569;"><strong style="color:#0f172a;">${escapeHtml(step.title)}</strong> ${escapeHtml(step.text)}</p>
      </td>`
    )
    .join('');

  return `<table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr>${cells}</tr></table>`;
}

function buildThankYouHtml(variantKey, data) {
  const brand = getBrandConfig();
  const variant = VARIANTS[variantKey] || VARIANTS.contact;
  const firstName = escapeHtml((data.name || 'there').split(' ')[0]);
  const summary = data.summaryHtml || '';
  const primaryHref = brand.links[variant.primaryCta.hrefKey] || brand.whatsapp;
  const secondaryHref = brand.links[variant.secondaryCta.hrefKey] || brand.site;

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Thank you — ${escapeHtml(brand.name)}</title>
</head>
<body style="margin:0;padding:0;background:#eef0f5;font-family:Arial,Helvetica,sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#eef0f5;padding:32px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:18px;overflow:hidden;box-shadow:0 8px 32px rgba(15,23,42,0.1);">
          <tr>
            <td style="background:linear-gradient(145deg,#0c1020 0%,#151b32 55%,#1a1430 100%);padding:40px 36px 32px;text-align:center;">
              <p style="margin:0 0 8px;font-size:11px;font-weight:700;letter-spacing:0.18em;text-transform:uppercase;color:#f05a28;">${escapeHtml(brand.name)}</p>
              <h1 style="margin:0;font-size:28px;line-height:1.25;font-weight:800;color:#ffffff;">${variant.headline(firstName)}</h1>
              <p style="margin:14px 0 0;font-size:15px;line-height:1.6;color:rgba(255,255,255,0.78);max-width:440px;display:inline-block;">${variant.subheadline}</p>
            </td>
          </tr>
          <tr>
            <td style="height:4px;background:linear-gradient(90deg,#f05a28 0%,#ff7a45 50%,#f05a28 100%);font-size:0;line-height:0;">&nbsp;</td>
          </tr>
          <tr>
            <td style="padding:32px 36px 8px;">
              <p style="margin:0 0 18px;font-size:15px;line-height:1.7;color:#334155;">${variant.intro(brand)}</p>
              ${summary}
            </td>
          </tr>
          <tr>
            <td style="padding:0 36px 28px;">
              <p style="margin:0 0 14px;font-size:12px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;color:#64748b;">What happens next</p>
              ${stepsHtml(variant.steps)}
            </td>
          </tr>
          <tr>
            <td style="padding:0 36px 28px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:linear-gradient(135deg,#fff7f3 0%,#ffffff 100%);border:1px solid #fed7c7;border-radius:14px;">
                <tr>
                  <td style="padding:22px 24px;">
                    <p style="margin:0 0 14px;font-size:12px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;color:#f05a28;">Contact us directly</p>
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                      ${contactLinksHtml(brand)}
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td style="padding:0 36px 32px;text-align:center;">
              <a href="${primaryHref}" style="display:inline-block;margin:0 6px 10px;padding:14px 24px;background:#f05a28;color:#ffffff;font-size:14px;font-weight:700;text-decoration:none;border-radius:10px;">${escapeHtml(variant.primaryCta.label)}</a>
              <a href="${secondaryHref}" style="display:inline-block;margin:0 6px 10px;padding:14px 24px;background:#0f172a;color:#ffffff;font-size:14px;font-weight:700;text-decoration:none;border-radius:10px;">${escapeHtml(variant.secondaryCta.label)}</a>
            </td>
          </tr>
          <tr>
            <td style="padding:0 36px 28px;text-align:center;">
              <p style="margin:0 0 16px;font-size:12px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:#94a3b8;">Follow us</p>
              ${socialIconsHtml(brand)}
            </td>
          </tr>
          <tr>
            <td style="background:#f8fafc;padding:22px 36px;border-top:1px solid #e2e8f0;text-align:center;">
              <p style="margin:0 0 6px;font-size:13px;color:#64748b;">${escapeHtml(brand.name)} · AI-Powered Revenue Systems</p>
              <p style="margin:0;font-size:12px;color:#94a3b8;">Serving B2B businesses across ${escapeHtml(brand.regions)}</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

function buildThankYouText(variantKey, data) {
  const brand = getBrandConfig();
  const variant = VARIANTS[variantKey] || VARIANTS.contact;
  const firstName = (data.name || 'there').split(' ')[0];

  return [
    variant.headline(firstName),
    '',
    variant.subheadline.replace(/<[^>]+>/g, ''),
    '',
    ...(data.summaryText || []),
    '',
    '--- Contact us ---',
    `Email: ${brand.email}`,
    `UAE WhatsApp: ${brand.phoneUae}`,
    `Pakistan: ${brand.phonePk}`,
    '',
    `Website: ${brand.site}`,
    `LinkedIn: ${brand.linkedin}`,
    `Instagram: ${brand.instagram}`,
    `TikTok: ${brand.tiktok}`,
    `Facebook: ${brand.facebook}`,
    '',
    `${brand.name} · Serving ${brand.regions}`,
  ].join('\n');
}

function formatContactThankYou(contact) {
  const service = contact.service ? SERVICE_LABELS[contact.service] || contact.service : null;
  const rows = [['Name', escapeHtml(contact.name)]];
  if (service) rows.push(['Service interest', escapeHtml(service)]);
  if (contact.company) rows.push(['Company', escapeHtml(contact.company)]);
  rows.push(['Message', `<span style="font-weight:500;color:#334155;white-space:pre-wrap;">${escapeHtml(contact.message)}</span>`]);

  const summaryText = [
    '--- Your submission ---',
    `Name: ${contact.name}`,
    service ? `Service: ${service}` : null,
    contact.company ? `Company: ${contact.company}` : null,
    `Message: ${contact.message}`,
  ].filter(Boolean);

  return {
    subject: VARIANTS.contact.subject(getBrandConfig()),
    html: buildThankYouHtml('contact', {
      name: contact.name,
      summaryHtml: summaryTableHtml('Your submission', rows),
    }),
    text: buildThankYouText('contact', { name: contact.name, summaryText }),
  };
}

function formatAuditThankYou(contact) {
  const rows = [
    ['Name', escapeHtml(contact.name)],
    ['Email', `<a href="mailto:${escapeHtml(contact.email)}" style="color:#f05a28;text-decoration:none;">${escapeHtml(contact.email)}</a>`],
    ['Request', 'Free Website Audit'],
  ];
  if (contact.message) {
    rows.push([
      'Notes',
      `<span style="font-weight:500;color:#334155;white-space:pre-wrap;">${escapeHtml(contact.message)}</span>`,
    ]);
  }

  const summaryText = [
    '--- Your audit request ---',
    `Name: ${contact.name}`,
    `Email: ${contact.email}`,
    'Request: Free Website Audit',
    contact.message ? `Notes: ${contact.message}` : null,
  ].filter(Boolean);

  return {
    subject: VARIANTS.audit.subject(getBrandConfig()),
    html: buildThankYouHtml('audit', {
      name: contact.name,
      summaryHtml: summaryTableHtml('Your audit request', rows),
    }),
    text: buildThankYouText('audit', { name: contact.name, summaryText }),
  };
}

function formatApplicationThankYou(application) {
  const rows = [
    ['Name', escapeHtml(application.name)],
    ['Email', `<a href="mailto:${escapeHtml(application.email)}" style="color:#f05a28;text-decoration:none;">${escapeHtml(application.email)}</a>`],
    ['Role', escapeHtml(application.role || 'Open application')],
    ['CV file', escapeHtml(application.cvFileName || 'Attached')],
  ];

  const summaryText = [
    '--- Your application ---',
    `Name: ${application.name}`,
    `Email: ${application.email}`,
    `Role: ${application.role || 'Open application'}`,
    `CV: ${application.cvFileName || '—'}`,
  ];

  return {
    subject: VARIANTS.apply.subject(getBrandConfig()),
    html: buildThankYouHtml('apply', {
      name: application.name,
      summaryHtml: summaryTableHtml('Your application', rows),
    }),
    text: buildThankYouText('apply', { name: application.name, summaryText }),
  };
}

/** Pick contact vs audit thank-you from lead source. */
function formatContactOrAuditThankYou(contact) {
  const source = contact?.source || '';
  if (source === 'home-audit-banner') return formatAuditThankYou(contact);
  return formatContactThankYou(contact);
}

module.exports = {
  formatContactThankYou,
  formatAuditThankYou,
  formatApplicationThankYou,
  formatContactOrAuditThankYou,
};
