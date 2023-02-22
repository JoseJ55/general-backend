const router = require('express').Router();

const Merchants = require('./Merchants');

router.use(Merchants);

module.exports = router;