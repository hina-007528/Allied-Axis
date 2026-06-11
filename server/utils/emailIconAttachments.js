const fs = require('fs');
const path = require('path');

const ICON_FILES = [
  'email.png',
  'phone.png',
  'whatsapp.png',
  'linkedin.png',
  'instagram.png',
  'tiktok.png',
  'facebook.png',
  'globe.png',
];

function resolveIconDir() {
  const candidates = [
    path.join(__dirname, '../assets/email-icons'),
    path.join(__dirname, '../../client/public/images/email-icons'),
  ];
  for (const dir of candidates) {
    if (fs.existsSync(path.join(dir, 'email.png'))) return dir;
  }
  return candidates[1];
}

function iconCid(filename) {
  return filename.replace(/\.png$/i, '');
}

/** Inline PNG attachments for thank-you emails (works in Gmail, Outlook, Hostinger webmail). */
function getEmailIconAttachments() {
  const dir = resolveIconDir();
  return ICON_FILES.filter((file) => fs.existsSync(path.join(dir, file))).map((file) => ({
    filename: file,
    path: path.join(dir, file),
    cid: iconCid(file),
  }));
}

function emailIconSrc(filename) {
  return `cid:${iconCid(filename)}`;
}

module.exports = {
  getEmailIconAttachments,
  emailIconSrc,
};
