var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');
var mainCtrl = require('./controllers/mainCtrl.js');
var middleware = require('./controllers/middleware.js');

var app = express();
app.use(bodyParser.json());
app.use(middleware.addHeaders);

app.get('/name', mainCtrl.getName);









app.listen(9002, function(e) {
  if (e) return concole.error(e);
  console.log('Now listening on port: 9002');
});
