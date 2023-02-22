const router = require('express').Router();

const Categories = require('./Categories');

router.use(Categories);

module.exports = router;