const Sequelize = require('sequelize');
const db = require('../config/connection');

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
        }
    }, 
    {
        db,
        freezeTableName: false,
        modelName: 'merchants'
    }
)

module.exports = Merchants;