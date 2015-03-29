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

mongoose.connect(mongoAdress, function(err){
  if(err){
	    console.error("Failed to connect to MongoDB");
	    console.log(err);
  }
  else
  		console.log("Successfully connection to MongoDB");
});

var homeModel = require('./models').homeModel;
var CVModel = require('./models').CVModel;


app.get('/api/home', function(req, res, next){
	CVModel.find(function(err, coll){
		if (!err) {
			return res.send(coll);
		} else {
			console.log(err);
			next(err);
		}
	});
});

app.get('/api/home/:id', function (req, res, next) {
	homeModel.findOne({_id: req.params.id}, function (e, result) {
		if (e) return next(e);
		res.send(result);
	});
});

app.post('/api/home', function(req, res, next){
	var home = new homeModel(req.body);
	homeModel.save(function (e, results){
		if (e) return next(e);
		res.send(results);
	});
});

app.put('/api/home/:id', function(req, res, next){
	delete req.body._id; //duplicate id bug
	homeModel.findOneAndUpdate({_id: req.params.id}, req.body, function (err, result){
		if (err) return next(err);
		res.send(result);
	});
});

app.delete('/api/home/:id', function(req, res, next){
	homeModel.remove({_id: req.params.id}, function (err, result){
		if (err) return next(err);
		res.send(true);
	});
});



app.get('/api/cv', function(req, res, next){
	CVModel.find(function(err, coll){
		if (!err) {
			return res.send(coll);
		} else {
			console.log(err);
			next(err);
		}
	});
});

app.get('/api/cv/:id', function (req, res, next) {
	CVModel.findOne({_id: req.params.id}, function (e, result) {
		if (e) return next(e);
		res.send(result);
	});
});

app.post('/api/cv', function(req, res, next){
	var cv = new CVModel(req.body);
	CVModel.save(function (e, results){
		if (e) return next(e);
		res.send(results);
	});
});

app.put('/api/cv/:id', function(req, res, next){
	delete req.body._id; //duplicate id bug
	CVModel.findOneAndUpdate({_id: req.params.id}, req.body, function (err, result){
		if (err) return next(err);
		res.send(result);
	});
});

app.delete('/api/cv/:id', function(req, res, next){
	CVModel.remove({_id: req.params.id}, function (err, result){
		if (err) return next(err);
		res.send(true);
	});
});

