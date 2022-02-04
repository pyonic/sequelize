const router = require('express').Router();

router.use('/users', require('./user.route'));
router.use('/products', require('./product.route'));

module.exports = router;