const mongoose = require('mongoose');

mongoose
	.connect(process.env.MONGODB_URI, {
		useUnifiedTopology: true,
		useNewUrlParser: true,
	})
	.then(() => console.log('DB is connect'))
	.catch(err => console.log(err));
