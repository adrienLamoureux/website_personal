var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var technoSchema = new Schema({
	frontEnd: String,
	server: String,
	database: String,
	onlineServer: String,
	onlineDatabase: String,
	packaging: String,
	sources: String
}, {collection: 'techno'});

var technoModel = mongoose.model('techno', technoSchema);

module.exports = {
	technoModel: technoModel
};
