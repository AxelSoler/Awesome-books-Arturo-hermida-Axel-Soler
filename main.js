import Book from './book.js';
import Books from './books.js';

const div = document.querySelector('.books');
const bookList = new Books();

function display(bookObj) {
  const divList = document.createElement('div');
  divList.classList.add('bookList');
  divList.setAttribute('id', bookObj.id);
  const name = document.createElement('h3');
  name.innerHTML = `"${bookObj.title}" by ${bookObj.author}`;
  const remBtn = document.createElement('button');
  remBtn.classList.add('remBtn');
  remBtn.innerHTML = 'Remove';

  remBtn.addEventListener('click', () => bookList.deleteItem(bookObj.id));

  divList.appendChild(name);
  divList.appendChild(remBtn);
  div.appendChild(divList);
}

function getInput() {
  const title = document.querySelector('.inputTitle').value;
  const author = document.querySelector('.inputAuthor').value;
  const book = new Book(title, author);
  document.querySelector('.addBook').reset();
  return book;
}

const addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click', () => {
  const book = getInput();
  bookList.addBook(book);
  display(book);
});

window.addEventListener('load', () => {
  bookList.books = JSON.parse(localStorage.getItem('listBooks' || '[]'));
  if (bookList.books === null) {
    bookList.books = [];
    return;
  }
  bookList.books.forEach((book) => display(book));
});