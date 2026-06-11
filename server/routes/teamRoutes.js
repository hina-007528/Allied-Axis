const router = require('express').Router();
const c = require('../controllers/teamController');
const { submitTeamApplication } = require('../controllers/applicationController');
const { protect, authorize } = require('../middleware/auth');
const { applyLimiter } = require('../middleware/rateLimiter');
const uploadCv = require('../middleware/uploadCv');
const validate = require('../middleware/validate');
const formSecurity = require('../middleware/formSecurity');
const { applyBodySchema } = require('../validators/formSchemas');

router.post(
  '/apply',
  applyLimiter,
  uploadCv,
  validate(applyBodySchema),
  formSecurity,
  submitTeamApplication
);
router.get('/', c.getTeamMembers);
router.post('/', protect, authorize('admin'), c.createTeamMember);
router.put('/:id', protect, authorize('admin'), c.updateTeamMember);
router.delete('/:id', protect, authorize('admin'), c.deleteTeamMember);

module.exports = router;
