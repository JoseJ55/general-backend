const router = require('express').Router();

const Categories = require('../../../Modals/Categories')

router.get('/categories/', (req, res) => {
    Categories.findAll()
    .then((categories) => {
        res.json({
            amount: categories.length,
            results: categories
        });
    })
    .catch((err) => console.log(err));
})

module.exports = router;