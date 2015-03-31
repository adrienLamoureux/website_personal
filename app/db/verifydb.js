var mongo = require('mongodb').MongoClient;
var mongoAdress = require('./../../config/config.js').mongoAdress;

var checkDb = function(db){
	db.collection('cv', function(err, CVCollection){
		CVCollection.find().toArray(function(err, CVDocs){
			console.log('cvDocs');
			console.log(CVDocs);
		});
	});

	db.collection('home', function(err, homeCollection){
		homeCollection.find().toArray(function(err, homeDocs){
			console.log('homeDocs');
			console.log(homeDocs);
		});
	});

	db.collection('image', function(err, imageCollection){
		imageCollection.find().toArray(function(err, imageDocs){
			console.log('imageDocs');
			console.log(imageDocs);
		});
	});
};

mongo.connect(mongoAdress, function(err, db) {
	if (err) { console.log("\t--> Connection failure !\n"); return false; }
	console.log("\t--> Successfully connected to the database!\n");
	checkDb(db);
});