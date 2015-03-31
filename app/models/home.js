var mongoose = require('mongoose');

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
	street: String,
	imageID: {type: mongoose.Schema.Types.ObjectId, ref:'imageModel'}
}, {collection: 'home'});

var homeModel = mongoose.model('home', homeSchema);

module.exports = {
	homeModel: homeModel
};