const router = require('express').Router();

router.get('/', async (req, res) => {
    try {
        res.render('home');
        // res.render('home', { layout: 'main.handlebars' });
    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;