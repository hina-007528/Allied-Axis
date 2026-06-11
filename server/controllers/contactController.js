const Contact = require('../models/Contact');
const Subscriber = require('../models/Subscriber');
const asyncHandler = require('../utils/asyncHandler');
const AppError = require('../utils/AppError');
const logger = require('../utils/logger');
const { sendContactLeadEmail, sendContactThankYouEmail } = require('../utils/email');

function buildContactPayload(body) {
  const intent = body.intent;
  return {
    name: body.name,
    email: body.email,
    phone: body.phone || '',
    company: body.company || '',
    service: body.service || '',
    budget: body.budget || '',
    message: body.message,
    source:
      body.source ||
      (intent === 'call' ? 'contact-call' : intent === 'message' ? 'contact-message' : 'website'),
  };
}

exports.submitContact = asyncHandler(async (req, res) => {
  const payload = buildContactPayload(req.body);
  const isAuditLead = payload.source === 'home-audit-banner';

  const contact = await Contact.create(payload);
  logger.info(`New contact submission from ${contact.email} (${contact._id})`);

  let emailSent = false;
  let thankYouSent = false;
  let emailError = null;
  let thankYouError = null;

  try {
    emailSent = await sendContactLeadEmail(contact);
    if (emailSent) {
      logger.info(`Contact lead email sent for ${contact._id}`);
    } else {
      logger.warn(`Contact email skipped — SMTP not configured (${contact._id})`);
      emailError = 'Email not configured — add RESEND_API_KEY on Render';
    }
  } catch (err) {
    emailError = err.message;
    logger.error(`Contact notification email failed for ${contact._id}: ${err.message}`, {
      code: err.code,
      response: err.response,
    });
  }

  try {
    thankYouSent = await sendContactThankYouEmail(contact);
    if (thankYouSent) {
      logger.info(`Contact thank-you email sent to ${contact.email} (${contact._id})`);
    }
  } catch (err) {
    thankYouError = err.message;
    logger.error(`Contact thank-you email failed for ${contact._id}: ${err.message}`);
  }

  res.status(201).json({
    success: true,
    message: isAuditLead
      ? 'Thank you! Your free audit request is confirmed. We will email you within 24–48 hours.'
      : 'Thank you for reaching out. We will get back to you within 24 hours.',
    data: { id: contact._id },
    emailSent,
    thankYouSent,
    ...(emailError ? { emailError } : {}),
    ...(thankYouError ? { thankYouError } : {}),
  });
});

exports.getContacts = asyncHandler(async (req, res) => {
  const contacts = await Contact.find().sort('-createdAt');
  res.status(200).json({ success: true, count: contacts.length, data: contacts });
});

exports.updateContactStatus = asyncHandler(async (req, res, next) => {
  const contact = await Contact.findByIdAndUpdate(req.params.id, { status: req.body.status }, { new: true });
  if (!contact) return next(new AppError('Contact not found', 404));
  res.status(200).json({ success: true, data: contact });
});

exports.subscribe = asyncHandler(async (req, res) => {
  const { email } = req.body;
  const existing = await Subscriber.findOne({ email });
  if (existing) {
    return res.status(200).json({ success: true, message: 'You are already subscribed.' });
  }
  await Subscriber.create({ email });
  logger.info(`New subscriber: ${email}`);
  res.status(201).json({ success: true, message: 'Successfully subscribed to our newsletter.' });
});
