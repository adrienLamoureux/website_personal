var mongoose = require('mongoose');

var Schema = mongoose.Schema;

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
	dateStarting: String,
	dateEnding: String,
	hours: String,
	contractType: String
}, {collection: 'proExp'});

var CVSchema = new Schema({
	formations: [formationSchema],
	languages: [languageSchema],
	skills: [skillSchema],
	proExps: [proExpSchema]
}, {collection: 'cv'});

var CVModel = mongoose.model('cv', CVSchema);

module.exports = {
	CVModel: CVModel
};
