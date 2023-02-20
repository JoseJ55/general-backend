const Sequelize = require('sequelize');
const db = require('../config/connection');

const Partnerships = require('./Partnerships');
const Address = require('./Address');
const Products = require('./Products');

const Manufactures = db.define(
    'manufactures', 
    {
        manufacture_id: {
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
            allowNull: false,
        }
    },
    {
        db,
        freezeTableName: false,
        modelName: 'manufactures'
    }
)

Manufactures.hasMany(Partnerships, { foreignKey: 'manufacture_id' });
Manufactures.hasMany(Products, { foreignKey: 'manufacture_id' });
Manufactures.hasOne(Address, { foreignKey: 'address_id' });

module.exports = Manufactures;