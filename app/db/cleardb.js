var mongo = require('mongodb').MongoClient;
var mongoAdress = require('./../../config/config.js').mongoAdress;

var clearCV = function(db){
		db.collection('cv', function(err, collection) {
		if (collection) {
			collection.remove({}, function(err,removed) {
				if (!removed) {
					console.log("\t--> collection could not be cleared!\n");
					throw err; return false; }
			});
		};
	});
};

var clearHome = function(db){
		db.collection('home', function(err, collection) {
		if (collection) {
			collection.remove({}, function(err,removed) {
				if (!removed) {
					console.log("\t--> collection could not be cleared!\n");
					throw err; return false; }
			});
		};
	});
};

var clearProject = function(db){
		db.collection('project', function(err, collection) {
		if (collection) {
			collection.remove({}, function(err,removed) {
				if (!removed) {
					console.log("\t--> collection could not be cleared!\n");
					throw err; return false; }
			});
		};
	});
};

var clearImage = function(db){
		db.collection('image', function(err, collection) {
		if (collection) {
			collection.remove({}, function(err,removed) {
				if (!removed) {
					console.log("\t--> collection could not be cleared!\n");
					throw err; return false; }
			});
		};
	});
};

mongo.connect(mongoAdress, function(err, db) {
	if (err) { console.log("\t--> Connection failure !\n"); return false; }
	console.log("\t--> Successfully connected to the database!\n");

	clearCV(db);
	clearHome(db);
	clearProject(db);
	clearImage(db);
});