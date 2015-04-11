var mongoose = require('mongoose');

var Schema = mongoose.Schema;

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
	dateStarting: String,
	dateEnding: String,
	hours: String,
	contractType: String
});

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
