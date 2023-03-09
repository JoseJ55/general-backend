const router = require('express').Router();

const login = require('./Login');

router.use(login);

module.exports = router;