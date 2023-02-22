const router = require('express').Router();

const Customers = require('./Customers');

router.use(Customers);

module.exports = router;