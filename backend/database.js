const mongoose = require('mongoose');

const URI = process.env.MONGODB_URI ? process.env.MONGODB_URI : 'mongodb://localhost/salve-books';

mongoose
	.connect(URI, {
		useUnifiedTopology: true,
		useNewUrlParser: true,
	})
	.then(() => console.log('DB is connect'))
	.catch(err => console.log(err));
