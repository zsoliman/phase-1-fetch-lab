const fetchBooks = async () => {

  let request = await fetch('https://anapioficeandfire.com/api/books') // requesting info from api server 
  let response = await request.json()                                  // grabs data from server as an object
  renderBooks(response)
  response.forEach(book => console.log(book.name))
  return fetch('https://anapioficeandfire.com/api/books')

}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function () {
  fetchBooks();
});
