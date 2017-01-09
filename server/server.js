var express = require('express');

var app = express();

const PORT_NUMBER = 5000;
 
var mongoConfig = require('./config/mongo.json');
var mongoose = require('mongoose');

mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://'+mongoConfig.url+'/'+mongoConfig.name);

var almundoApp = require('./apps/almundo/app');
	
app.use('/',almundoApp);

app.listen(PORT_NUMBER,function() {
	console.log('-----------------------------------------------------');
	console.log("Server Started!");
	console.log('');
	console.log('Examen Técnico de MEAN Stack - almundo.com');
	console.log('');
	console.log('Developer: Alex Larragueta');
	console.log('-----------------------------------------------------');
});