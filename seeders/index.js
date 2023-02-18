const seedUsers = require('./Users.seeds');

const db = require('../config/connection');

const seedAll = async() => {
    await db.sync({force: true});
    await seedUsers();
    process.exit(0);
}

seedAll();