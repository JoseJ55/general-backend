const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const cors = require('cors');

// Getting the routes that express will use.
const routes = require('./routes');

// Initalizing express
const app = express();
const hbs = exphbs.create({});

// Setting up handlebars to work with express
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// Setting up express.
app.use(express.static(path.join(__dirname, 'client')))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes)
app.use(cors());

module.exports = app;