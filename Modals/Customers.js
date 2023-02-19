const Sequelize = require('sequelize');
const db = require('../config/connection');

const Customers = db.define(
    'customers', 
    {
        user_id: {
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
        }
    }, 
    {
        db,
        freezeTableName: false,
        modelName: 'customers'
    }
)

module.exports = Customers;