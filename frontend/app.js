import './styles/app.css';
import UI from './services/UI';
const ui = new UI();

document.addEventListener('DOMContentLoaded', () => {
	ui.renderBooks();
});

document.getElementById('bookForm').addEventListener('submit', e => {
	e.preventDefault();
	const bookForm = document.getElementById('bookForm');
	const formData = new FormData(bookForm);
	ui.addNewBook(formData);
});

document.getElementById('ListBooks').addEventListener('click', e => {
	e.preventDefault();
	const id = e.target.getAttribute('id');
	if (id && id !== 'ListBooks') {
		ui.deleteBook({ id });
	}
});

document.querySelector('#inputImgForm').addEventListener('change', e => {
	const imgForm = document.getElementById('imgForm');
	const name = e.target.files[0].name;
	document.getElementById('labelImgForm').innerHTML = name;
	const curFiles = e.target.files;
	for (const file of curFiles) {
		if (validFileType(file)) {
			imgForm.src = URL.createObjectURL(file);
		}
	}
});

const fileTypes = [ 'image/apng', 'image/jpeg', 'image/pjpeg', 'image/png', 'image/webp' ];

function validFileType(file){
	return fileTypes.includes(file.type);
}
