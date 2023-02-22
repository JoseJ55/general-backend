const router = require('express').Router();

const Address = require('../../../Modals/Address')

router.get('/address/', (req, res) => {
    Address.findAll()
    .then((address) => {
        res.json({
            amount: address.length,
            results: address
        });
    })
    .catch((err) => console.log(err));
})

module.exports = router;