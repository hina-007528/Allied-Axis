const router = require('express').Router();
const c = require('../controllers/siteController');

router.get('/bootstrap', c.getBootstrap);
router.get('/pages/:key', c.getPageContent);

module.exports = router;
