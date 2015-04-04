var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var referenceSchema = new Schema({
	name: String,
	link: String
});

var resultSchema = new Schema({
	description: String,
	filetype: String,
	filename: String,
	filesize: Number,
	base64: String
}, {collection: 'resultProject'});

var projectSchema = new Schema({
	title: String,
	dateStarting: String,
	dateEnding: String,
	level: String,
	teamNumber: Number,
	workMethods: [String],
	description: String,
	filetype: String,
	filename: String,
	filesize: Number,
	base64: String,
	technologies: [String],
	references: [referenceSchema],
	results: [resultSchema],
	learnings: [String]
}, {collection: 'project'});

var projectModel = mongoose.model('project', projectSchema);

module.exports = {
	projectModel: projectModel
};
