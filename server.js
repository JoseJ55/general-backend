const express = require('express');
const cors = require('cors');
// const handlebars = require('handlebars');


require('dotenv').config();

const routes = require('./routes');

const PORT = 3000 || process.env.PORT;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

app.listen(PORT, () => {
    console.log('listening at port: ', PORT);
})