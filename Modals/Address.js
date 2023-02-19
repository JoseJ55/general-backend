const Sequelize = require('sequelize');
const db = require('../config/connection');

const Address = db.define(
    'address', 
    {
        address_id: {
            type: Sequelize.STRING,
            primaryKey: true,
            allowNull: false,
            unique: true
        },
        street_address: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        county: {
            type: Sequelize.STRING,
            allowNull: false,
        }, 
        state: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        city: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        zip: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        user_id: {
            type: Sequelize.STRING,
            allowNull: false,
        }
    }, 
    {
        db,
        freezeTableName: false,
        modelName: 'address'
    }
)

module.exports = Address;