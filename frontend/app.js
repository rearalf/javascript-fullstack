import './styles/app.css';

document.addEventListener('DOMContentLoaded', () => {
	renderBooks();
});

document.querySelector('#book-form').addEventListener('submit', e => {
	e.preventDefault();

	// Inputs value
	const title = e.target[0].value;
	const author = e.target[1].value;
	const view = e.target[2].value;
	const cover = e.target[3].value;
	console.log(cover);

	addNewBook({ title, author, view });
});

async function addNewBook({ title, author, view }){
	await fetch('/api/books', {
		method: 'POST',
		mode: 'cors',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ title, author, view }),
	})
		.then(res => res.json())
		.then(res => console.log(res))
		.catch(err => console.log(err));
}

async function getBooks(){
	const books = await fetch('/api/books').then(res => res.json());
	return books;
}

async function renderBooks(){
	const { books } = await getBooks();
	const listBooks = document.getElementById('ListBooks');
	listBooks.innerHTML = '';
	books.forEach(book => {
		const div = document.createElement('div');
		div.className = 'card mb-2';
		div.innerHTML = `
			<div class="card-content-img">
				<img src="https://s3.amazonaws.com/virginia.webrand.com/virginia/344/LEqKdMKtOj8/c9e74d28a1a2e698f62446b8e5345254.jpg?1590394814"
					class="card-img" alt="imagen">
				<span class="card-time">1 month ago</span>
			</div>
			<div class="card-body">
				<h4 class="card-title">Title: ${book.title}</h4>
				<p class="card-author">Autor: ${book.author}</p>
				<p class="card-opinion">Opinión: ${book.view}</p>
				<button class="btn">X</button>
			</div>
		`;
		listBooks.appendChild(div);
	});
}
