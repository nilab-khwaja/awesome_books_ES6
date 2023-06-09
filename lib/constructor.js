export default class BookList {
  constructor() {
    this.bookList = document.getElementById('book-list');
    this.books = [];
    const addBtn = document.getElementById('add-btn');
    addBtn.addEventListener('click', () => this.addBook());

    // Add event listener to book list for click events
    this.bookList.addEventListener('click', (event) => {
      if (event.target.classList.contains('remove-btn')) {
        const bookDiv = event.target.closest('.collection');
        const bookNo = Array.from(this.bookList.children).indexOf(bookDiv);
        this.removeBook(bookNo);
      }
    });
  }

  updateList(init) {
    for (let i = init; i < this.books.length; i += 1) {
      const bookDiv = document.createElement('div');
      bookDiv.innerHTML += `
        <span>"${this.books[i].title}" by ${this.books[i].author}</span>
        <button class="remove-btn">Remove</button>
      `;
      bookDiv.classList.add('collection');
      this.bookList.appendChild(bookDiv);
    }
  }

  removeBook(bookNo) {
    if (bookNo < 0) { return; }
    this.books.splice(bookNo, 1);
    localStorage.setItem('addBook', JSON.stringify(this.books));
    this.bookList.innerHTML = '';
    this.updateList(0);
  }

  addBook() {
    const bookTitle = document.getElementById('title').value;
    const bookAuthor = document.getElementById('author').value;
    if (bookTitle === '' || bookAuthor === '') {
      return;
    }
    const newBook = { title: bookTitle, author: bookAuthor };
    this.books.push(newBook);
    localStorage.setItem('addBook', JSON.stringify(this.books));
    this.updateList(this.books.length - 1);
  }
}