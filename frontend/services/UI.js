import BookServices from './BookServices';
const bookServices = new BookServices();

class UI {
	async renderBooks() {
		const { books } = await bookServices.getBooks();
		const listBooks = document.getElementById('ListBooks');
		listBooks.innerHTML = '';
		books.forEach(({ image, title, author, view, _id, created_at }) => {
			const div = document.createElement('div');
			const img = image ? image : 'https://placehold.co/125x175';
			div.className = 'card mb-2';
			div.innerHTML = `
			<div class="card-content-img">
				<img src="${img}"
					class="card-img" alt="imagen">
				<span class="card-time">1 month ago</span>
			</div>
			<div class="card-body">
				<h4 class="card-title">Title: <span>${title}</span></h4>
				<p class="card-author">Autor: <span>${author}</span></p>
				<p class="card-opinion">Opinión: <span>${view}</span></p>
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
