const Sequelize = require('sequelize');
const db = require('../config/connection');
const Address = require('./Address');

const Merchants = require('./Merchants');

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
            allowNull: false
        },
        address_id: {
            type: Sequelize.STRING,
            allowNull: false
        }
    }, 
    {
        db,
        freezeTableName: false,
        modelName: 'employees'
    }
)

Employees.belongsTo(Merchants, { foreignKey: 'merchant_id'});
Employees.hasOne(Address, { foreignKey: 'address_id' });

module.exports = Employees;