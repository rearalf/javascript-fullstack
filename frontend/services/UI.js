import BookServices from './BookServices';
const bookServices = new BookServices();

class UI {
	async renderBooks() {
		const { books } = await bookServices.getBooks();
		const listBooks = document.getElementById('ListBooks');
		listBooks.innerHTML = '';
		books.forEach(({ image, title, author, view, _id }) => {
			const div = document.createElement('div');
			div.className = 'card mb-2';
			div.innerHTML = `
			<div class="card-content-img">
				<img src="${image}"
					class="card-img" alt="imagen">
				<span class="card-time">1 month ago</span>
			</div>
			<div class="card-body">
				<h4 class="card-title">Title: ${title}</h4>
				<p class="card-author">Autor: ${author}</p>
				<p class="card-opinion">Opinión: ${view}</p>
				<button class="btn" id="${_id}">X</button>
			</div>
		`;
			listBooks.appendChild(div);
		});
	}

	async deleteBook({ id = '' }) {
		const data = await bookServices.deleteBook({ id });
		console.log(data);
		this.renderBooks();
	}

	async addNewBook(book) {
		const data = await bookServices.addNewBook(book);
		console.log(data);
		this.clearBookForm();
		this.renderBooks();
	}

	clearBookForm() {
		document.getElementById('bookForm').reset();
		document.getElementById('imgForm').src = 'https://placehold.co/125x175';
	}
}

export default UI;
