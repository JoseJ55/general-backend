const router = require('express').Router();

const Manufactures = require('./Manufactures');

router.use(Manufactures);

module.exports = router;