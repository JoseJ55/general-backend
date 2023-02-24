const router = require('express').Router();
const { v4: uuidv4 } = require('uuid');

const db = require('../../../config/connection');
const Users = require('../../../Modals/Users')

router.get('/users/', async (req, res) => {
    try {
        await Users.findAll()
        .then((users) => {
            res.json({
                amount: users.length,
                results: users
            });
        })
        .catch((err) => console.log(err));
    } catch(err) {
        res.status(500).json({ error: 'could not make a connection' })
    }
})

router.get('/users/:user_id', (req, res) => {
    let user_id = req.params.user_id;

    Users.findByPk(user_id)
    .then((user) => {
        if (user == null) throw 'user does not exist';

        res.status(200).json({result: user})
    })
    .catch((err) => {
        res.status(400).json({error: err})
    })
})

router.post('/users/', (req, res) => {
    let customUUID = uuidv4();

    Users.create(
        {
            user_id: customUUID,
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            username: req.body.username
        },
        {
            fields:[
                'user_id',
                'first_name',
                'last_name',
                'email',
                'username'
            ]
        }
    )
    .then(() => {
        res.status(200).json({Message: 'user was added'});
    })
    .catch((err) => {
        if(err.errors[0].validatorKey === 'is_null') {
            let message = err.errors[0].message.split('.').pop();
            res.status(401).json({error: message});
            return;
        }
        res.status(401).json({Error: 'was not able to add data'})
    })
})

router.patch('/users/:user_id', (req, res) => {
    Users.update({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        username: req.body.username
    }, {
        where: {
            user_id: req.params.user_id
        }
    })
    .then((user) => {
        if (user == null) throw 'user does not exist';

        res.status(200).json({ message: 'updated user'});
    })
    .catch((err) => {
        res.status(401).json({ error: err })
    })
})

router.delete('/users/:user_id', (req, res) => {
    Users.findByPk(req.params.user_id)
    .then((user) => {
        if (user == null) throw 'user does not exist';

        user.destroy()
        .then((mes) => {
            console.log(mes)
            res.status(200).json({ message: 'deleted user' })
        })
    })
    .catch((err) => {
        console.log(err)
        res.status(401).json({ error: err})
    })
})

module.exports = router;