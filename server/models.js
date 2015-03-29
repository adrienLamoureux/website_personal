var mongoose = require('mongoose');

// Schema
var Schema = mongoose.Schema;

var homeSchema = new Schema({
	name: String,
	forename: String,
	age: String,
	presentation: String,
	mailToContact: String,
	zipCode: Number,
	city: String,
	county: String,
	country: String,
	street: String
}, {collection: 'home'});

var formationSchema = new Schema({
	graduation: String,
	domain: String,
	speciality: String,
	university: String,
	dateStarting: String,
	dateEnding: String
});

var languageSchema = new Schema({
	name: String,
	level: String
});

var detailedSkillSchema = new Schema({
	name: String,
	important: {type: Boolean, default: false},
	link: String
});

var skillSchema = new Schema({
	name: String,
	details: [detailedSkillSchema]
});

var keywordSchema = new Schema({
	word: String,
	link: String
});

var proExpSchema = new Schema({
	entreprise: String,
	place: String,
	linkTo: String,
	stageMasterName: String,
	stageMasterForename: String,
	subject: String,
	keywords: [keywordSchema],
	dateStarting: Date,
	dateEnding: Date
});

var CVSchema = new Schema({
	formations: [formationSchema],
	languages: [languageSchema],
	skills: [skillSchema],
	proExps: [proExpSchema]
}, {collection: 'cv'});

// Model

var CVModel = mongoose.model('cv', CVSchema);
var homeModel = mongoose.model('home', homeSchema);

module.exports = {
	homeModel: homeModel,
	CVModel: CVModel
};