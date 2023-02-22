const router = require('express').Router();

const Employees = require('./Employees');

router.use(Employees);

module.exports = router;