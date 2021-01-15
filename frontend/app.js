import './styles/app.css';
import UI from './services/UI';
const ui = new UI();

document.addEventListener('DOMContentLoaded', () => {
	ui.renderBooks();
});

document.getElementById('bookForm').addEventListener('submit', e => {
	e.preventDefault();
	// Inputs value
	const title = e.target[0].value;
	const author = e.target[1].value;
	const view = e.target[2].value;
	const cover = e.target[3].files[0];
	ui.addNewBook({ title, author, view, cover });
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
