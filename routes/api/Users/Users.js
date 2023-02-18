const router = require('express').Router();

const db = require('../../../config/connection');
const Users = require('../../../Modals/Users')

router.get('/users/', (req, res) => {
    Users.findAll()
    .then((users) => {
        res.json({results: users});
    })
    .catch((err) => console.log(err));
    // res.json({message: "hello this is the users."})
})

module.exports = router;