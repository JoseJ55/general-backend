const Customers = require('../Modals/Customers');

const customersData = [
    {
        customers_id: 'cust1',
        first_name: 'customer1',
        last_name: 'c',
        email: 'customer1@email.com',
        username: 'customer1',
        address_id: 'custAdd1'
    },
    {
        customers_id: 'cust2',
        first_name: 'customer2',
        last_name: 'c',
        email: 'customer2@email.com',
        username: 'customer2',
        address_id: 'custAdd2'
    }
]

const seedCustomers = () => Customers.bulkCreate(customersData);

module.exports = seedCustomers;