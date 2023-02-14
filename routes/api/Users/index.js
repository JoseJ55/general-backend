const router = require('express').Router();

const Users = require('./Users');

router.use(Users);

module.exports = router;