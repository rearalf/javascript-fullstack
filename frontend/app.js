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
	const cover = e.target[3].files;

	ui.addNewBook({ title, author, view, cover });
});

document.getElementById('ListBooks').addEventListener('click', e => {
	e.preventDefault();
	const id = e.target.getAttribute('id');
	if (id && id !== 'ListBooks') {
		ui.deleteBook({ id });
	}
});
