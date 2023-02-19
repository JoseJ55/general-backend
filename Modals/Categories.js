const Sequelize = require('sequelize');
const db = require('../config/connection');

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

module.exports = Categories;