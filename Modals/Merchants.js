const Sequelize = require('sequelize');
const db = require('../config/connection');

const Employees = require('./Employees')
const Partnerships = require('./Partnerships');
const Products = require('./Products');
const Address = require('./Address');

const Merchants = db.define(
    'merchants', 
    {
        merchant_id: {
            type: Sequelize.STRING,
            primaryKey: true,
            allowNull: false,
            unique: true
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        address_id: {
            type: Sequelize.STRING,
            allowNull: false
        }
    }, 
    {
        db,
        freezeTableName: false,
        modelName: 'merchants'
    }
)

// Merchants.hasMany(Partnerships, { foreignKey: 'merchant_id' });
// Merchants.hasMany(Products, { foreignKey: 'merchant_id' });
// Merchants.hasOne(Address, { foreignKey: 'address_id' });
// Merchants.hasMany(Employees, { foreignKey: 'merchant_id'});

module.exports = Merchants;