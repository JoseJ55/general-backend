const Users = require('../Modals/Users');

const userData = [
    {
        user_id: 'f2ub42u43',
        first_name: 'John',
        last_name: 'Smith',
        email: 'a@email.com',
        username: 'user1'
    },
    {
        user_id: 'f2ub42u42',
        first_name: 'Sara',
        last_name: 'Smith',
        email: 'b@email.com',
        username: 'user2'
    },
    {
        user_id: 'f2ub42u41',
        first_name: 'Kevin',
        last_name: 'Luis',
        email: 'c@email.com',
        username: 'user3'
    }
]

const seedUser = () => Users.bulkCreate(userData);

module.exports = seedUser;