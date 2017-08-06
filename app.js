var express = require('express');
var mongoose = require('mongoose');
var connectString = require('./config');
var setupController = require('./controllers/setupController.js');
var todoController = require('./controllers/todoController.js');
var todoDashboardController = require('./controllers/todoDashboardController.js');
var app = express();
var port = process.env.port || 3000;

mongoose.connect(connectString.dbstring());
app.use('/register', express.static(__dirname + '/public/todo-register.html'));
app.use(express.static(__dirname + '/public'));
todoController(app);
todoDashboardController(app);
app.listen(port);
