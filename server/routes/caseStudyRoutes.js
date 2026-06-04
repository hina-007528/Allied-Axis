const router = require('express').Router();
const c = require('../controllers/caseStudyController');
const { protect, authorize } = require('../middleware/auth');

router.get('/', c.getCaseStudies);
router.get('/:slug', c.getCaseStudy);
router.post('/', protect, authorize('admin'), c.createCaseStudy);
router.put('/:id', protect, authorize('admin'), c.updateCaseStudy);
router.delete('/:id', protect, authorize('admin'), c.deleteCaseStudy);

module.exports = router;
