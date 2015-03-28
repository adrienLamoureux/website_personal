'use strict'

var mongoAdress = require('./../config.js').mongoAdress;
var serverPort = require('./../config.js').serverPort;

// Module dependencies.
var application_root = __dirname,
	express = require('express'), //Web framework
	path = require('path'), //Utilities for dealing with file paths
	bodyParser  = require('body-parser'),
	mongoose = require('mongoose')

//Create server
var app = express();

app.set('port', (process.env.PORT || serverPort));

// Configure server
app.use(bodyParser.json({limit:'16mb'}));
app.use(bodyParser.urlencoded({limit:'16mb', extended: true}));
app.use(express.static(path.join(application_root ,'../client/')));

//Start server
app.listen(app.get('port'), function() {
	console.log("Node app is running at localhost:" + app.get('port'));
});

app.get('/', function(request, response) {
  response.send('Hello World!');
});

/*mongoose.connect(mongoAdress, function(err){
  if(err){
	    console.error("Failed to connect to MongoDB");
	    console.log(err);
  }
  else
  		console.log("Successfully connection to MongoDB");
});*/
