// app/routes.js

var homeModel = require('./models/home.js').homeModel;
var CVModel = require('./models/cv.js').CVModel;
var imageModel = require('./models/image.js').imageModel;
var projectModel = require('./models/project.js').projectModel;
var technoModel = require('./models/techno.js').technoModel;

module.exports = function(app, passport) {

	// =====================================
	// LOGIN ===============================
	// =====================================
	// show the login form
	app.get('/login', function(req, res) {

		// render the page and pass in any flash data if it exists
		res.render('login.ejs', { message: req.flash('loginMessage') });
	});

	// process the login form
	app.post('/login', passport.authenticate('local-login', {
		successRedirect : '/profile', // redirect to the secure profile section
		failureRedirect : '/login', // redirect back to the signup page if there is an error
		failureFlash : true // allow flash messages
	}));

	// =====================================
	// SIGNUP ==============================
	// =====================================
	// show the signup form
	app.get('/signup', function(req, res) {

		// render the page and pass in any flash data if it exists
		res.render('signup.ejs', { message: req.flash('signupMessage') });
	});

	// process the signup form
	app.post('/signup', passport.authenticate('local-signup', {
		successRedirect : '/profile', // redirect to the secure profile section
		failureRedirect : '/signup', // redirect back to the signup page if there is an error
		failureFlash : true // allow flash messages
	}));

	// =====================================
	// PROFILE SECTION =========================
	// =====================================
	// we will want this protected so you have to be logged in to visit
	// we will use route middleware to verify this (the isLoggedIn function)
	app.get('/profile', isLoggedIn, function(req, res) {
		res.render('profile.ejs', {
			user : req.user // get the user out of session and pass to template
		});
	});

	// =====================================
	// LOGOUT ==============================
	// =====================================
	app.get('/logout', function(req, res) {
		req.logout();
		res.redirect('/');
	});

	app.get('/api/home', function(req, res, next){
		homeModel.find(function(err, coll){
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
		home.save(function (e, results){
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
		cv.save(function (e, results){
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

	app.get('/api/image', function(req, res, next){
		imageModel.find(function(err, coll){
			if (!err) {
				return res.send(coll);
			} else {
				console.log(err);
				next(err);
			}
		});
	});

	app.get('/api/image/:id', function (req, res, next) {
		imageModel.findOne({_id: req.params.id}, function (e, result) {			
			if (e) return next(e);
			res.send(result);
		});
	});

	app.post('/api/image', function(req, res, next){
		var image = new imageModel(req.body);
		image.save(function (e, results){
			if (e) return next(e);
			res.send(results);
		});
	});

	app.put('/api/image/:id', function(req, res, next){
		delete req.body._id; //duplicate id bug
		imageModel.findOneAndUpdate({_id: req.params.id}, req.body, function (err, result){
			if (err) return next(err);
			res.send(result);
		});
	});

	app.delete('/api/image/:id', function(req, res, next){
		imageModel.remove({_id: req.params.id}, function (err, result){
			if (err) return next(err);
			res.send(true);
		});
	});

	app.get('/api/project', function(req, res, next){
		projectModel.find(function(err, coll){
			if (!err) {
				return res.send(coll);
			} else {
				console.log(err);
				next(err);
			}
		});
	});

	app.get('/api/project/:id', function (req, res, next) {
		projectModel.findOne({_id: req.params.id}, function (e, result) {			
			if (e) return next(e);
			res.send(result);
		});
	});

	app.post('/api/project', function(req, res, next){
		var project = new projectModel(req.body);
		project.save(function (e, results){
			if (e) return next(e);
			res.send(results);
		});
	});

	app.put('/api/project/:id', function(req, res, next){
		delete req.body._id; //duplicate id bug
		projectModel.findOneAndUpdate({_id: req.params.id}, req.body, function (err, result){
			if (err) return next(err);
			res.send(result);
		});
	});

	app.delete('/api/project/:id', function(req, res, next){
		projectModel.remove({_id: req.params.id}, function (err, result){
			if (err) return next(err);
			res.send(true);
		});
	});

	app.get('/api/techno', function(req, res, next){
		technoModel.find(function(err, coll){
			if (!err) {
				return res.send(coll);
			} else {
				console.log(err);
				next(err);
			}
		});
	});

	app.get('/api/techno/:id', function (req, res, next) {
		technoModel.findOne({_id: req.params.id}, function (e, result) {			
			if (e) return next(e);
			res.send(result);
		});
	});

	app.post('/api/techno', function(req, res, next){
		var techno = new technoModel(req.body);
		techno.save(function (e, results){
			if (e) return next(e);
			res.send(results);
		});
	});

	app.put('/api/techno/:id', function(req, res, next){
		delete req.body._id; //duplicate id bug
		technoModel.findOneAndUpdate({_id: req.params.id}, req.body, function (err, result){
			if (err) return next(err);
			res.send(result);
		});
	});

	app.delete('/api/techno/:id', function(req, res, next){
		technoModel.remove({_id: req.params.id}, function (err, result){
			if (err) return next(err);
			res.send(true);
		});
	});

};

// route middleware to make sure
function isLoggedIn(req, res, next) {

	// if user is authenticated in the session, carry on
	if (req.isAuthenticated())
		return next();

	// if they aren't redirect them to the home page
	res.redirect('/');
}
