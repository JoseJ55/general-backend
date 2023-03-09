const router = require('express').Router();

const home = require('./Home');

router.use(home);

module.exports = router;