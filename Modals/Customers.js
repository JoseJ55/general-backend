const Sequelize = require('sequelize');
const db = require('../config/connection');

const Address = require('./Address');

const Customers = db.define(
    'customers', 
    {
        customers_id: {
            type: Sequelize.STRING,
            primaryKey: true,
            allowNull: false,
            unique: true
        },
        first_name: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        last_name: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false,
        }, 
        username: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        address_id: {
            type: Sequelize.STRING,
            allowNull: false,
        }
    }, 
    {
        db,
        freezeTableName: false,
        modelName: 'customers'
    }
)

// Customers.hasOne(Address, { foreignKey: 'address_id' });

module.exports = Customers;