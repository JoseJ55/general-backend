const router = require('express').Router();

const Customers = require('../../../Modals/Customers')

router.get('/customers/', (req, res) => {
    Customers.findAll()
    .then((customers) => {
        res.json({
            amount: customers.length,
            results: customers
        });
    })
    .catch((err) => console.log(err));
})

module.exports = router;