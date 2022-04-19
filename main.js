const div = document.querySelector('.books');

class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
    this.id = Math.random();
  }
}
class Books {
  constructor() {
    this.books = [];
  }

  addBook(book) {
    this.books.push(book);
    localStorage.setItem('listBooks', JSON.stringify(this.books));
    display(book);
  }

  deleteItem(id) {
    const book = document.getElementById(id);
    book.remove();
    this.books.splice(id, 1);
    localStorage.setItem('listBooks', JSON.stringify(this.books));
  }
}

const bookList = new Books;

function getInput() {
  const title = document.querySelector('.inputTitle').value;
  const author = document.querySelector('.inputAuthor').value;
  const book = new Book(title, author);
  document.querySelector('.addBook').reset();
  return book;
}

function display(bookObj) {
  const divList = document.createElement('div');
  divList.classList.add('bookList');
  divList.setAttribute('id', bookObj.id);
  const name = document.createElement('h3');
  name.innerHTML = bookObj.title;
  const aut = document.createElement('h3');
  aut.innerHTML = bookObj.author;
  const remBtn = document.createElement('button');
  remBtn.innerHTML = 'Remove';
  const line = document.createElement('hr');

  remBtn.addEventListener('click', () => bookList.deleteItem(bookObj.id));

  divList.appendChild(name);
  divList.appendChild(aut);
  divList.appendChild(remBtn);
  divList.appendChild(line);
  div.appendChild(divList);
}


const addBtn =document.getElementById('addBtn');
addBtn.addEventListener('click', () => {
  const book = getInput();
  bookList.addBook(book);
});

window.addEventListener('load', () => {
    bookList.books = JSON.parse(localStorage.getItem('listBooks' || '[]'));
    if(bookList.books === null) {
      bookList.books = [];
      return;
    };
    bookList.books.forEach((book) => display(book))
});