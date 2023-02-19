const Sequelize = require('sequelize');
const db = require('../config/connection');

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

module.exports = Manufactures;