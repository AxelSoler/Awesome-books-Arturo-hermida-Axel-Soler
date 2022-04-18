let books = [];

const addBook = (ev) => {
  ev.preventDefault();

  let book = {
    title: document.querySelector('.inputTitle').value,
    author: document.querySelector('.inputAuthor').value,
  }

  books.push(book);
  document.querySelector('.addBook').reset();

  console.warn('added', {books});
  let pre =document.querySelector('#msg pre');
  pre.textContent = '\n' + JSON.stringify(books, '\t', 2);
  
};

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('addBtn').addEventListener('click', addBook)
});