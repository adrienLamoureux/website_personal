var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var imageSchema = new Schema({
   	filetype: String,
	filename: String,
	filesize: Number,
	base64: String
}, {collection: 'image'});

var imageModel = mongoose.model('image', imageSchema);

module.exports = {
	imageModel: imageModel
};
