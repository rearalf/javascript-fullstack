class BookServices {
	constructor() {
		this.URI = 'api/books';
	}

	async getBooks() {
		const books = await fetch(this.URI).then(res => res.json());
		return books;
	}

	async deleteBook({ id }) {
		return await fetch('/api/books', {
			method: 'DELETE',
			mode: 'cors',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ id }),
		})
			.then(res => res.json())
			.then(res => {
				return {
					message: res.message,
					success: res.success,
				};
			});
	}

	async addNewBook(book) {
		return await fetch(this.URI, {
			method: 'POST',
			body: book,
		})
			.then(res => res.json())
			.then(res => {
				return {
					message: res.message,
					success: res.success,
				};
			});
	}
}

export default BookServices;
