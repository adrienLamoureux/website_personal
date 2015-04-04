var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var referenceSchema = new Schema({
	name: String,
	link: String
});

var resultSchema = new Schema({
	description: String,
	descriptionImgID: {type: mongoose.Schema.Types.ObjectId, ref:'imageModel'}
});

var projectSchema = new Schema({
	title: String,
	dateStarting: String,
	dateEnding: String,
	level: String,
	teamNumber: Number,
	workMethods: [String],
	description: String,
	descriptionImgID: {type: mongoose.Schema.Types.ObjectId, ref:'imageModel'}
	technologies: [String],
	references: [referenceSchema],
	results: [resultSchema],
	learnings: [String]
});

var projectModel = mongoose.model('project', projectSchema);

module.exports = {
	projectModel: projectModel
};
