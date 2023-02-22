const router = require('express').Router();

const Products = require('./Products');

router.use(Products);

module.exports = router;