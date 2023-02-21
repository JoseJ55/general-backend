const seedUsers = require('./Users.seeds');
const seedAddress = require('./Address.seeds');
const seedCategories = require('./Categories.seeds');
const seedEmployees = require('./Employees.seed');
const seedManufacture = require('./Manufactures.seeds');
const seedMerchant = require('./Merchant.seeds');
const seedPartnerships = require('./Partnerships.seeds');
const seedProduct = require('./Products.seeds');

const db = require('../config/connection');

const seedAll = async() => {
    await db.sync({force: true});
    await seedUsers();
    await seedAddress();
    await seedCategories();
    await seedEmployees();
    await seedManufacture();
    await seedMerchant();
    await seedPartnerships();
    await seedProduct();
    process.exit(0);
}

seedAll();