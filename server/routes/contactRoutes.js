const router = require('express').Router();
const { submitContact, getContacts, updateContactStatus, subscribe } = require('../controllers/contactController');
const { contactLimiter } = require('../middleware/rateLimiter');
const { protect, authorize } = require('../middleware/auth');
const validate = require('../middleware/validate');
const formSecurity = require('../middleware/formSecurity');
const {
  contactSubmitSchema,
  subscribeSchema,
  contactStatusSchema,
} = require('../validators/formSchemas');

router.post('/', contactLimiter, validate(contactSubmitSchema), formSecurity, submitContact);
router.post('/subscribe', contactLimiter, validate(subscribeSchema), subscribe);
router.get('/', protect, authorize('admin'), getContacts);
router.put('/:id/status', protect, authorize('admin'), validate(contactStatusSchema), updateContactStatus);

module.exports = router;
