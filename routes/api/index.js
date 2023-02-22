const router = require('express').Router();

const users = require('./Users');
const products = require('./Products');
const partnerships = require('./Partnerships');
const merchants = require('./Merchants');
const manufactures = require('./Manufactures');
const employees = require('./Employees');
const customers = require('./Customers');
const categories = require('./Categories');
const address = require('./Address');

router.use(users);
router.use(products);
router.use(partnerships);
router.use(merchants);
router.use(manufactures);
router.use(employees);
router.use(customers);
router.use(categories);
router.use(address);

module.exports = router;