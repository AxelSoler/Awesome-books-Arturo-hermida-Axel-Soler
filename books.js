export default class Books {
  constructor() {
    this.books = [];
  }

  addBook(book) {
    this.books.push(book);
    localStorage.setItem('listBooks', JSON.stringify(this.books));
  }

  deleteItem(id) {
    const book = document.getElementById(id);
    book.remove();
    this.books.splice(id, 1);
    localStorage.setItem('listBooks', JSON.stringify(this.books));
  }
}