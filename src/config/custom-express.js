require('marko/node-require').install();
require('marko/express');

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    next();
 });

app.use('/estatico', express.static('./src/app/public/'));

app.use(bodyParser.urlencoded({
    extended: true
}));

const rotas = require('../app/rotas/rotas');
rotas(app);
module.exports = app;