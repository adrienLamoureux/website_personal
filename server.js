// server.js

var mongoAdress = require('./config/config.js').mongoAdress;
var serverPort = require('./config/config.js').serverPort;

// set up ======================================================================
// get all the tools we need
var express  = require('express');
var app      = express();
var	path = require('path');
var	bodyParser  = require('body-parser');
var port     = process.env.PORT || serverPort;
var mongoose = require('mongoose');
var passport = require('passport');
var flash    = require('connect-flash');
var	morgan = require('morgan');
var	cookieParser = require('cookie-parser');
var	session = require('express-session');

// configuration ===============================================================
mongoose.connect(mongoAdress, function(err){
  if(err){
	    console.error("Failed to connect to MongoDB");
	    console.log(err);
  }
  else
  		console.log("Successfully connection to MongoDB");
});

require('./config/passport')(passport); // pass passport for configuration

// set up our express application
app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser.json({limit:'16mb'}));
app.use(bodyParser.urlencoded({limit:'16mb', extended: true}));
app.use(express.static(path.join(__dirname ,'./public/')));

app.set('view engine', 'ejs'); // set up ejs for templating

// required for passport
app.use(session({ secret: 'adlamour' })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session

// routes ======================================================================
require('./app/routes.js')(app, passport); // load our routes and pass in our app and fully configured passport

// launch ======================================================================
app.listen(port);
console.log('Express started at ' + port);
