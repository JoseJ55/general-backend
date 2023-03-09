const router = require('express').Router();

const api = require('./api');
const client = require('./client');

router.use(client);
router.use('/api', api);

module.exports = router;