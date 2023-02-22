const router = require('express').Router();

const db = require('../../../config/connection');
const Products = require('../../../Modals/Products')

router.get('/products/', (req, res) => {
    Products.findAll()
    .then((products) => {
        res.json({
            amount: products.length,
            results: products
        });
    })
    .catch((err) => console.log(err));
})

// router.post('/users/', (req, res) => {
//     Users.create(
//         {
//             user_id: req.body.user_id,
//             first_name: req.body.first_name,
//             last_name: req.body.last_name,
//             email: req.body.email
//         },
//         {
//             fields:[
//                 'user_id',
//                 'first_name',
//                 'last_name',
//                 'email'
//             ]
//         }
//     )
//     .then(() => {
//         res.sendStatus(200);
//     })
//     .catch((err) => console.log(err))
// })

module.exports = router;