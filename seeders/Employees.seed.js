const Employees = require('../Modals/Employees');

const employeesData = [
    {
        user_id: 'employ1',
        first_name: 'employee1',
        last_name: 'e',
        email: 'employee1@email.com',
        username: 'employee1',
        merchant_id: 'mer1',
        address_id: 'employAdd1'
    },
    {
        user_id: 'employ2',
        first_name: 'employee2',
        last_name: 'e',
        email: 'employee2@email.com',
        username: 'employee2',
        merchant_id: 'mer2',
        address_id: 'employAdd2'
    }
]

const seedEmployees = () => Employees.bulkCreate(employeesData);

module.exports = seedEmployees;