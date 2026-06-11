const TeamApplication = require('../models/TeamApplication');
const asyncHandler = require('../utils/asyncHandler');
const AppError = require('../utils/AppError');
const logger = require('../utils/logger');
const { assertValidCvFile } = require('../utils/cvValidation');
const { sendTeamApplicationEmail, sendApplicationThankYouEmail } = require('../utils/email');

exports.submitTeamApplication = asyncHandler(async (req, res) => {
  if (!req.file) {
    throw new AppError('Please upload your CV (PDF, DOC, or DOCX).', 400);
  }

  const { safeName } = assertValidCvFile(req.file);
  const { name, email, role } = req.body;

  const application = await TeamApplication.create({
    name,
    email,
    role: role || '',
    cvFileName: safeName,
    cvMimeType: req.file.mimetype,
    cvSize: req.file.size,
  });

  logger.info(`New team application from ${application.email} (${application._id})`);

  const fileSnapshot = {
    originalname: safeName,
    mimetype: req.file.mimetype,
    buffer: Buffer.from(req.file.buffer),
  };

  res.status(201).json({
    success: true,
    message: 'Thank you! Your application was received. We will review it and get back to you soon.',
    data: { id: application._id },
  });

  sendTeamApplicationEmail(application, fileSnapshot)
    .then((sent) => {
      if (sent) logger.info(`Team application email sent for ${application._id}`);
    })
    .catch((err) => {
      logger.error(`Team application email failed for ${application._id}: ${err.message}`);
    });

  sendApplicationThankYouEmail(application)
    .then((sent) => {
      if (sent) logger.info(`Application thank-you email sent to ${application.email} (${application._id})`);
    })
    .catch((err) => {
      logger.error(`Application thank-you email failed for ${application._id}: ${err.message}`);
    });
});
