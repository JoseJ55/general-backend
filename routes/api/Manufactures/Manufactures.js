const router = require('express').Router();

const Manufactures = require('../../../Modals/Manufactures')

router.get('/manufactures/', (req, res) => {
    Manufactures.findAll()
    .then((manufactures) => {
        res.json({
            amount: manufactures.length,
            results: manufactures
        });
    })
    .catch((err) => console.log(err));
})

module.exports = router;