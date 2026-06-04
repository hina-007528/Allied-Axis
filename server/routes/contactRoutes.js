const router = require('express').Router();
const { submitContact, getContacts, updateContactStatus, subscribe } = require('../controllers/contactController');
const { contactLimiter } = require('../middleware/rateLimiter');
const { protect, authorize } = require('../middleware/auth');

router.post('/', contactLimiter, submitContact);
router.post('/subscribe', contactLimiter, subscribe);
router.get('/', protect, authorize('admin'), getContacts);
router.put('/:id/status', protect, authorize('admin'), updateContactStatus);

module.exports = router;
