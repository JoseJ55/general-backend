const seedUsers = require('./Users.seeds');
const seedAddress = require('./Address.seeds');
const seedCategories = require('./Categories.seeds');
const seedEmployees = require('./Employees.seed');
const seedManufacture = require('./Manufactures.seeds');
const seedMerchant = require('./Merchant.seeds');
const seedPartnerships = require('./Partnerships.seeds');
const seedProduct = require('./Products.seeds');
const seedCustomers = require('./Customers.seeds');

const db = require('../config/connection');

const seedAll = async() => {
    await db.sync({force: true});

    await seedAddress()
    .then(() => console.log('Successfully Seeded Address'))
    .catch((err) => console.log('Seeding Address Error: ', err))
    
    await seedCategories()
    .then(() => console.log('Successfully Seeded Categories'))
    .catch((err) => console.log('Seeding Categories Error: ', err))

    await seedEmployees()
    .then(() => console.log('Successfully Seeded Employees'))
    .catch((err) => console.log('Seeding Employees Error: ', err))

    await seedManufacture()
    .then(() => console.log('Successfully Seeded Manufacture'))
    .catch((err) => console.log('Seeding Manufacture Error: ', err))

    await seedMerchant()
    .then(() => console.log('Successfully Seeded Merchant'))
    .catch((err) => console.log('Seeding Merchant Error: ', err))

    await seedPartnerships()
    .then(() => console.log('Successfully Seeded Partnerships'))
    .catch((err) => console.log('Seeding Partnerships Error: ', err))

    await seedProduct()
    .then(() => console.log('Successfully Seeded Product'))
    .catch((err) => console.log('Seeding Product Error: ', err))

    await seedUsers()
    .then(() => console.log('Successfully Seeded Users'))
    .catch((err) => console.log('Seeding Users Error: ', err))

    await seedCustomers()
    .then(() => console.log('Successfully Seeded Customers'))
    .catch((err) => console.log('Seeding Customers Error: ', err))

    process.exit(0);
}

seedAll();