const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const router = require('./router');

const app = express();
require('dotenv').config();

app.set('port', process.env.PORT || 3000);
app.set('host', process.env.HOST || 'localhost');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use(express.static(path.join(__dirname, '..', 'client', 'dist')));

app.use(router);

module.exports = app;
