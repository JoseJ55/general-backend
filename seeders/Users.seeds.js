const Users = require('../Modals/Users');

const userData = [
    {
        user_id: 'f2ub42u43',
        first_name: 'John',
        last_name: 'Smith',
        email: 'a@email.com'
    },
    {
        user_id: 'f2ub42u42',
        first_name: 'Sara',
        last_name: 'Smith',
        email: 'b@email.com'
    },
    {
        user_id: 'f2ub42u41',
        first_name: 'Kevin',
        last_name: 'Luis',
        email: 'c@email.com'
    }
]

const seedUser = () => Users.bulkCreate(userData);

module.exports = seedUser;