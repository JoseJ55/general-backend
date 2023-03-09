const router = require('express').Router();

const home = require('./Home');
const login = require('./Login');
const signup = require('./Signup');

router.use(home);
router.use('/login', login);
router.use('/signup', signup);

module.exports = router;