'use strict';

var express  = require('express'),
    db = require('./db/dbMgr'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override'),
    port = 8080,
    app = express(); 

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(methodOverride('X-HTTP-Method-Override'));
app.use('/node_modules', express.static(__dirname + '/node_modules'));
app.use(express.static(__dirname + '/public'));  

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

db.connect();

require('./routes')(app, db);

app.listen(port);

console.log('Listening on port 8080...');


