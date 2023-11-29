const express = require('express');
const path = require('path');
const morgan = require('morgan');
const compression = require('compression');
const { hostname } = require('os');
const router = require('./routes.js');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(morgan('dev'));
app.use(compression());
app.use(express.json());
app.use(express.static(path.join(__dirname, './../client/dist/')));

app.use('/', router);

app.listen(port, hostname, () => console.log(`Server running on port:${port} why don't you catch it?!`));
