const { Router } = require('express');
const router = Router();
const Books = require('../models/books.models');
const fs = require('fs');

router.get('/', async (req, res) => {
	const books = await Books.find();
	res.status(200).json({ message: 'All books', books });
});

router.post('/', async (req, res) => {
	const { title, author, view } = req.body;
	const { buffer, mimetype } = req.file;
	let buff = new Buffer.from(buffer);
	let base64data = buff.toString('base64');
	const image = `data:${mimetype};base64,${base64data}`;
	const NewBook = await Books({ title, author, view, image });
	await NewBook.save()
		.then(book => {
			res.status(200).json({
				message: 'Save successful',
				success: true,
				book,
			});
		})
		.catch(err => {
			res.status(401).json({ message: 'Save error', success: false, err });
		});
});

router.delete('/', async (req, res) => {
	const { id } = req.body;
	Books.findOneAndDelete({ _id: id }, (err, docs) => {
		if (err) {
			res.status(401).json({ message: 'Deleted error', success: false, err });
		}
		else {
			res.status(200).json({ message: 'Deleted successfully', success: true, docs });
		}
	});
});

router.put('/', async (req, res) => {
	const { id } = req.body;
	Books.findByIdAndUpdate({ _id: id }, (err, docs) => {
		if (err) {
			res.status(401).json({ message: 'Update error', success: false, err });
		}
		else {
			res.status(200).json({ message: 'Update successful', success: true, docs });
		}
	});
});

module.exports = router;
