const Sequelize = require('sequelize');
const db = require('../config/connection');

const Employees = db.define(
    'employees', 
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
        },
        merchant_id: {
            type: Sequelize.STRING,
            allowNull: false,
        }
    }, 
    {
        db,
        freezeTableName: false,
        modelName: 'employees'
    }
)

module.exports = Employees;