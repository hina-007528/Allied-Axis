const Joi = require('joi');
const {
  CONTACT_SERVICES,
  CONTACT_BUDGETS,
  CONTACT_INTENTS,
  EMAIL_REGEX,
  PHONE_REGEX,
  FIELD_LIMITS,
} = require('../utils/formConstants');

const securityFields = {
  websiteUrl: Joi.string().allow('').max(200).optional(),
  companyWebsite: Joi.string().allow('').max(200).optional(),
  formStartedAt: Joi.number().integer().optional(),
};

const contactSubmitSchema = Joi.object({
  name: Joi.string().trim().min(2).max(FIELD_LIMITS.name).required().messages({
    'string.min': 'Name must be at least 2 characters',
    'any.required': 'Name is required',
  }),
  email: Joi.string()
    .trim()
    .lowercase()
    .max(FIELD_LIMITS.email)
    .pattern(EMAIL_REGEX)
    .required()
    .messages({
      'string.pattern.base': 'Please enter a valid email address',
      'any.required': 'Valid email is required',
    }),
  phone: Joi.string().trim().max(FIELD_LIMITS.phone).allow('').optional(),
  company: Joi.string().trim().max(FIELD_LIMITS.company).allow('').optional(),
  service: Joi.string().trim().allow('').optional(),
  budget: Joi.string().trim().allow('').optional(),
  message: Joi.string().trim().min(1).max(FIELD_LIMITS.message).required().messages({
    'string.max': `Message must be ${FIELD_LIMITS.message} characters or less`,
    'any.required': 'Message is required',
  }),
  source: Joi.string().trim().max(80).optional(),
  intent: Joi.string().valid(...CONTACT_INTENTS).optional(),
  ...securityFields,
})
  .custom((value, helpers) => {
    const isAudit = value.source === 'home-audit-banner';

    if (isAudit) {
      if (value.message.length > FIELD_LIMITS.message) {
        return helpers.error('any.custom', { message: 'Message is too long' });
      }
      return value;
    }

    if (!value.phone || !PHONE_REGEX.test(value.phone)) {
      return helpers.error('any.custom', { message: 'Please enter a valid phone or WhatsApp number' });
    }
    if (!value.company || value.company.length < 2) {
      return helpers.error('any.custom', { message: 'Business name is required' });
    }
    if (!value.service || !CONTACT_SERVICES.includes(value.service)) {
      return helpers.error('any.custom', { message: 'Please select a valid service' });
    }
    if (!value.budget || !CONTACT_BUDGETS.includes(value.budget)) {
      return helpers.error('any.custom', { message: 'Please select a budget range' });
    }
    if (value.message.length < 10) {
      return helpers.error('any.custom', { message: 'Message must be at least 10 characters' });
    }

    return value;
  })
  .messages({ 'any.custom': '{{#message}}' });

const subscribeSchema = Joi.object({
  email: Joi.string()
    .trim()
    .lowercase()
    .max(FIELD_LIMITS.email)
    .pattern(EMAIL_REGEX)
    .required()
    .messages({
      'string.pattern.base': 'Please enter a valid email address',
      'any.required': 'Email is required',
    }),
});

const applyBodySchema = Joi.object({
  name: Joi.string().trim().min(2).max(FIELD_LIMITS.name).required().messages({
    'string.min': 'Full name must be at least 2 characters',
    'any.required': 'Full name is required',
  }),
  email: Joi.string()
    .trim()
    .lowercase()
    .max(FIELD_LIMITS.email)
    .pattern(EMAIL_REGEX)
    .required()
    .messages({
      'string.pattern.base': 'Please enter a valid email address',
      'any.required': 'Email address is required',
    }),
  role: Joi.string().trim().max(FIELD_LIMITS.role).allow('').optional(),
  ...securityFields,
});

const contactStatusSchema = Joi.object({
  status: Joi.string().valid('new', 'read', 'replied', 'archived').required(),
});

module.exports = {
  contactSubmitSchema,
  subscribeSchema,
  applyBodySchema,
  contactStatusSchema,
};
