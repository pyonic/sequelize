const router = require('express').Router();

router.use('/users', require('./user.route'));
router.use('/products', require('./product.route'));
router.use('/gallery', require('./gallery.route'));

module.exports = router;