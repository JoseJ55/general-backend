const router = require('express').Router();

const Partnerships = require('../../../Modals/Partnerships')

router.get('/partnerships/', (req, res) => {
    Partnerships.findAll()
    .then((partnerships) => {
        res.json({
            amount: partnerships.length,
            results: partnerships
        });
    })
    .catch((err) => console.log(err));
})

module.exports = router;