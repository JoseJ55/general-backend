const Sequelize = require('sequelize');
const db = require('../config/connection');

const Customers = require('./Customers');
const Employees = require('./Employees');
const Manufacture = require('./Manufactures');
const Merchants = require('./Merchants');

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
        }
    }, 
    {
        db,
        freezeTableName: false,
        modelName: 'address'
    }
)

// Address.belongsToMany(Customers, { foreignKey: 'address_id' });
// Address.belongsToMany(Manufacture, { foreignKey: 'address_id' });
// Address.belongsToMany(Merchants, { foreignKey: 'address_id' });
// Address.belongsToMany(Employees, { foreignKey: 'address_id' });

module.exports = Address;