var express = require('express');
var bodyParser = require('body-parser');
var consign = require('consign');
var app = express();
app.set('view engine','ejs');
app.use(express.static('./app/public'));
app.set('views','./app/views');
consign().include('app/routes').into(app);
module.exports = app;
