var mongo = require('mongodb').MongoClient;
var mongoAdress = require('./../config.js').mongoAdress;

var initCV = function(db){
	db.collection('cv', function(err, collection) {
		if (collection) {
			collection.insert([
			{
				formations: [
				{
					graduation: "Master",
					domain: "Informatique",
					speciality: "Génie Logiciel",
					university: "Bordeaux",
					dateStarting: null,
					dateEnding: null
				},
				{
					graduation: "Licence",
					domain: "Informatique",
					speciality: null,
					university: "Bordeaux",
					dateStarting: null,
					dateEnding: null
				}
				],
				languages: [
				{
					name: "Anglais",
					level: "TOEIC 730"
				},
				{
					name: "Allemand",
					level: "Intermédiaire"
				},
				{
					name: "Japonais",
					level: "Débutant"
				}
				],
				skills: [
				{
					name: "Génie Logiciel",
					details: [{
						name: "Gestion de projets",
						important: true,
						link: null
					},
					{
						name: "Architecture Logiciel",
						important: false,
						link: null
					}]
				},
				{
					name: "Bio-Informatique",
					détails: [{
						name: "Génomique",
						important: false,
						link: null
					}]
				}
				],
				proExps: [
				{
					entreprise: "GO GEO",
					place: "Pau",
					linkTo: null,
					stageMasterName: "TRUONG",
					stageMasterForename: "The-Vinh",
					subject: "Réseau de Neurones",
					keywords: [],
					dateStarting: null,
					dateEnding: null
				}
				]
			}], function (err, result){
				console.log("CV inserted");
			});
		};
	});
};

var initHome = function(db){
		db.collection('home', function(err, collection) {
		if (collection) {
			collection.insert([
			{
				name: "LAMOUREUX",
				forename: "Adrien",
				age: "22",
				presentation: "A text",
				mailToContact: "vergil1534@gmail.com",
				zipCode: 33600,
				city: "Pessac",
				county: "Aquitaine",
				country: "France",
				street: "18 rue de Villemejan"
			}], function (err, result){
				console.log("home inserted")
			});
		};
	});
};

mongo.connect(mongoAdress, function(err, db) {
	if (err) { console.log("\t--> Connection failure !\n"); return false; }
	console.log("\t--> Successfully connected to the database!\n");

	initCV(db);
	initHome(db);
});