const router = require('express').Router();

const Merchants = require('../../../Modals/Merchants')

router.get('/merchants/', (req, res) => {
    Merchants.findAll()
    .then((merchants) => {
        res.json({
            amount: merchants.length,
            results: merchants
        });
    })
    .catch((err) => console.log(err));
})

module.exports = router;