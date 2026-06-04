const router = require('express').Router();
const c = require('../controllers/teamController');
const { submitTeamApplication } = require('../controllers/applicationController');
const { protect, authorize } = require('../middleware/auth');
const { contactLimiter } = require('../middleware/rateLimiter');
const uploadCv = require('../middleware/uploadCv');

router.post('/apply', contactLimiter, uploadCv, submitTeamApplication);
router.get('/', c.getTeamMembers);
router.post('/', protect, authorize('admin'), c.createTeamMember);
router.put('/:id', protect, authorize('admin'), c.updateTeamMember);
router.delete('/:id', protect, authorize('admin'), c.deleteTeamMember);

module.exports = router;
