const Sequelize = require('sequelize');
const db = require('../config/connection');

const Merchants = require('./Merchants');
const Manufacture = require('./Manufactures');

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
        manufacture_id: {
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

Partnerships.belongsToMany(Merchants, { foreignKey: 'merchant_id' });
Partnerships.belongsToMany(Manufacture, { foreignKey: 'manufacture_id' });

module.exports = Partnerships;