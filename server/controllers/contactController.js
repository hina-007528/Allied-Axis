const Contact = require('../models/Contact');
const Subscriber = require('../models/Subscriber');
const asyncHandler = require('../utils/asyncHandler');
const AppError = require('../utils/AppError');
const logger = require('../utils/logger');
const { sendContactLeadEmail } = require('../utils/email');

exports.submitContact = asyncHandler(async (req, res, next) => {
  const intent = req.body.intent;
  const payload = {
    name: String(req.body.name || '').trim(),
    email: String(req.body.email || '').trim().toLowerCase(),
    phone: String(req.body.phone || '').trim(),
    company: String(req.body.company || '').trim(),
    service: String(req.body.service || '').trim(),
    budget: String(req.body.budget || '').trim(),
    message: String(req.body.message || '').trim(),
    source:
      req.body.source ||
      (intent === 'call' ? 'contact-call' : intent === 'message' ? 'contact-message' : 'website'),
  };

  const isAuditLead = payload.source === 'home-audit-banner';

  if (!payload.name) return next(new AppError('Name is required', 400));
  if (!payload.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)) {
    return next(new AppError('Valid email is required', 400));
  }
  if (!payload.message) return next(new AppError('Message is required', 400));
  if (!isAuditLead && !payload.service) {
    return next(new AppError('Please select a service', 400));
  }
  if (!isAuditLead && !payload.budget) {
    return next(new AppError('Please select a budget range', 400));
  }

  const contact = await Contact.create(payload);
  logger.info(`New contact submission from ${contact.email} (${contact._id})`);

  let emailSent = false;
  let emailError = null;

  try {
    emailSent = await sendContactLeadEmail(contact);
    if (emailSent) {
      logger.info(`Contact lead email sent for ${contact._id}`);
    } else {
      logger.warn(`Contact email skipped — SMTP not configured (${contact._id})`);
      emailError = 'SMTP not configured on server';
    }
  } catch (err) {
    emailError = err.message;
    logger.error(`Contact notification email failed for ${contact._id}: ${err.message}`, {
      code: err.code,
      response: err.response,
    });
  }

  res.status(201).json({
    success: true,
    message: 'Thank you for reaching out. We will get back to you within 24 hours.',
    data: { id: contact._id },
    emailSent,
    ...(emailError ? { emailError } : {}),
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
