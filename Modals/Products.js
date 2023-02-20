const Sequelize = require('sequelize');
const db = require('../config/connection');

const Merchants = require('./Merchants');
const Manufacture = require('./Manufactures');
const Categories = require('./Categories');

const Products = db.define(
    'products', 
    {
        product_id: {
            type: Sequelize.STRING,
            primaryKey: true,
            allowNull: false,
            unique: true
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        description: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        category_id: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        merchant_price: {
            type: Sequelize.FLOAT,
            allowNull: false,
        },
        merchant_id: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        manufacture_price: {
            type: Sequelize.FLOAT,
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
        modelName: 'products'
    }
)

// Products.associate = (models) => {
    Products.belongsTo(Merchants, { foreignKey: 'merchant_id' });
    Products.belongsTo(Manufacture, { foreignKey: 'manufacture_id' });
    Products.hasOne(Categories, { foreignKey: 'category_id' });
// }

module.exports = Products;