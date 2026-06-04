const router = require('express').Router();
const c = require('../controllers/testimonialController');
const { protect, authorize } = require('../middleware/auth');

router.get('/', c.getTestimonials);
router.get('/featured', c.getFeaturedTestimonials);
router.post('/', protect, authorize('admin'), c.createTestimonial);
router.put('/:id', protect, authorize('admin'), c.updateTestimonial);
router.delete('/:id', protect, authorize('admin'), c.deleteTestimonial);

module.exports = router;
