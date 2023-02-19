const Sequelize = require('sequelize');
const db = require('../config/connection');

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

Products.associate = (models) => {
    Products.belongsTo(models.Merchants, { foreignKey: 'merchant_id' });
    Products.belongsTo(models.Manufacture, { foreignKey: 'manufacture_id' });
}

module.exports = Products;