const { Schema, model } = require('mongoose');

const BookSchema = new Schema({
	title: { type: String, required: true },
	author: { type: String, required: true },
	view: { type: String, required: true },
	image: { type: String, required: true },
	created_at: { type: Date, default: Date.now },
});

module.exports = model('Book', BookSchema);
