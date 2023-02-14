const router = require('express').Router();

router.get('/users/', (req, res) => {
    res.json({message: "hello this is the users."})
})

module.exports = router;