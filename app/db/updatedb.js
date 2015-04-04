var mongo = require('mongodb').MongoClient;
var mongoAdress = require('./../../config/config.js').mongoAdress;

var updateRefID = function(db){
	db.collection('home', function(err, homeCollection){
		homeCollection.find().toArray(function(err, homeDocs){
			db.collection('project', function(err, projectCollection){
				projectCollection.find().toArray(function(err, projectDocs){
					db.collection('image', function(err, imageCollection){
						imageCollection.find().toArray(function(err, imageDocs){
						});
					});
				});
			});
		});
	});
};

mongo.connect(mongoAdress, function(err, db) {
	if (err) { console.log("\t--> Connection failure !\n"); return false; }
	console.log("\t--> Successfully connected to the database!\n");

	//updateRefID(db);

	console.log("\t--> update success!\n");
});