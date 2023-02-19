const Sequelize = require('sequelize');
const db = require('../config/connection');

const Partnerships = db.define(
    'partnerships', 
    {
        partnership_id: {
            type: Sequelize.STRING,
            primaryKey: true,
            allowNull: false,
            unique: true
        },
        merchant_id: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        company_id: {
            type: Sequelize.STRING,
            allowNull: false,
        }
    }, 
    {
        db,
        freezeTableName: false,
        modelName: 'partnerships'
    }
)

module.exports = Partnerships;