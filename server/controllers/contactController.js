const Contact = require('../models/Contact');
const Subscriber = require('../models/Subscriber');
const asyncHandler = require('../utils/asyncHandler');
const AppError = require('../utils/AppError');
const logger = require('../utils/logger');
const { sendContactLeadEmail } = require('../utils/email');

exports.submitContact = asyncHandler(async (req, res) => {
  const contact = await Contact.create(req.body);
  logger.info(`New contact submission from ${contact.email}`);

  try {
    await sendContactLeadEmail(contact);
  } catch (err) {
    logger.error(`Contact notification email failed: ${err.message}`);
  }

  res.status(201).json({
    success: true,
    message: 'Thank you for reaching out. We will get back to you within 24 hours.',
    data: { id: contact._id },
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
