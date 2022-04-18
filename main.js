const div = document.querySelector('.books'); 

let books = [];

const deleteItem = (i)=>{
  books.splice(i, 1);
  localStorage.setItem('listBooks', JSON.stringify(books));
}

const display = () => {
  div.innerHTML = '';
  for ( let i = 0 ; i < books.length; i += 1){
    const divList = document.createElement('div');
    const name = document.createElement('h3');
    name.innerHTML = books[i].title;
    const aut = document.createElement('h3');
    aut.innerHTML = books[i].author;
    const remBtn = document.createElement('button');
    remBtn.innerHTML = 'Remove';

    remBtn.addEventListener('click', () =>{
      deleteItem(i);
      display();
    });
    
    divList.appendChild(name);
    divList.appendChild(aut);
    divList.appendChild(remBtn);

    div.appendChild(divList);
    }
};

const addBook = (ev) => {
  ev.preventDefault();

  let book = {
    title: document.querySelector('.inputTitle').value,
    author: document.querySelector('.inputAuthor').value,
  }

  books.push(book);
  document.querySelector('.addBook').reset();

  display();

  localStorage.setItem('listBooks', JSON.stringify(books));
  
};

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('addBtn').addEventListener('click', addBook)
});

window.addEventListener('load', () =>{
  if(localStorage.getItem('listBooks')){
    books = JSON.parse(localStorage.getItem('listBooks'));
    display();
  }
})
