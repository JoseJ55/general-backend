const Sequelize = require('sequelize');
const db = require('../config/connection');

const Products = require('./Products');

const Categories = db.define(
    'categories', 
    {
        category_id: {
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
        modelName: 'categories'
    }
)

// Categories.belongsToMany(Products, { foreignKey: 'category_id' });

module.exports = Categories;