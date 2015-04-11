var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var videoSchema = new Schema({
	description: String,
	link: String
});

var imageSchema = new Schema({
	description: String,
	filetype: String,
	filename: String,
	filesize: Number,
	base64: String
});

var referenceSchema = new Schema({
	name: String,
	link: String
});

var interestSchema = new Schema({
	title: String,
	description: String,
	videos: [videoSchema],
	images: [imageSchema],
	references: [referenceSchema]
}, {collection: 'interest'});

var interestModel = mongoose.model('interest', interestSchema);

module.exports = {
	interestModel: interestModel
};
