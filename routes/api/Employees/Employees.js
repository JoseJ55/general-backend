const router = require('express').Router();

const Employees = require('../../../Modals/Employees')

router.get('/employees/', (req, res) => {
    Employees.findAll()
    .then((employees) => {
        res.json({
            amount: employees.length,
            results: employees
        });
    })
    .catch((err) => console.log(err));
})

module.exports = router;