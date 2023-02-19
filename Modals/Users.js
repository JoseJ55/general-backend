const Sequelize = require('sequelize');
const db = require('../config/connection');

const Users = db.define(
    'users', 
    {
        user_id: {
            type: Sequelize.STRING,
            primaryKey: true
        },
        first_name: {
            type: Sequelize.STRING
        },
        last_name: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING
        }, 
        username: {
            type: Sequelize.STRING
        }
    }, 
    {
        db,
        freezeTableName: false,
        modelName: 'users'
    }
)

module.exports = Users;