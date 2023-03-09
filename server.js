// Getting config file for database
const sequelize = require('./config/connection');

// Initalizing the expresss app
const app = require('./app');

require('dotenv').config();

const PORT = 3000 || process.env.PORT;

sequelize.authenticate()
.then(() => console.log('Database connected...'))
.catch((err) => console.log('Error', err))

sequelize.sync({force: false})
.then(() => {
    app.listen(PORT, () => {
        console.log('listening at port: ', PORT);
    })
})