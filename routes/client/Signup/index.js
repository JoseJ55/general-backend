const router = require('express').Router();

const signup = require('./Signup');

router.use(signup);

module.exports = router;