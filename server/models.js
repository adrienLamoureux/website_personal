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
}, {collection: 'formation'});

var languageSchema = new Schema({
	name: String,
	level: String
}, {collection: 'language'});

var detailedSkillSchema = new Schema({
	name: String,
	important: {type: Boolean, default: false},
	link: String
}, {collection: 'detailledSkill'});

var skillSchema = new Schema({
	name: String,
	details: [detailedSkillSchema]
}, {collection: 'skill'});

var keywordSchema = new Schema({
	word: String,
	link: String
}, {collection: 'keyword'});

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
}, {collection: 'proExp'});

var CVSchema = new Schema({
	formations: [formationSchema],
	languages: [languageSchema],
	skills: [skillSchema],
	proExps: [proExpSchema]
}, {collection: 'cv'});

/*
var userImgSchema = new Schema({
	userID: {type: mongoose.Schema.Types.ObjectId, ref: 'userModel'},
	largeImg: {
		filetype: String,
		filename: String,
		filesize: Number,
		base64: String
	},
	smallImg:{
		filetype: String,
		filename: String,
		filesize: Number,
		base64: String
	}
}, {collection:'userImg'});
*/
// Model

var homeModel = mongoose.model('home', homeSchema);
var CVModel = mongoose.model('cv', CVSchema);

module.exports = {
	homeModel: homeModel,
	CVModel: CVModel
};