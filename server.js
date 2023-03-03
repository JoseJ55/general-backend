const cors = require('cors');
// const handlebars = require('handlebars');

const sequelize = require('./config/connection');

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