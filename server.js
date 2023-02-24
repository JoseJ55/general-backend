const express = require('express');
const cors = require('cors');
// const handlebars = require('handlebars');

const sequelize = require('./config/connection');


require('dotenv').config();

const routes = require('./routes');

const PORT = 3333 || process.env.PORT;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

sequelize.authenticate()
.then(() => console.log('Database connected...'))
.catch((err) => console.log('Error', err))

sequelize.sync({force: false})
.then(() => {
    app.listen(PORT, () => {
        console.log('listening at port: ', PORT);
    })
})