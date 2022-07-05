const fetchBooks = async () => {

  let request = await fetch('https://anapioficeandfire.com/api/books') // requesting info from api server 
  let response = await request.json()                                  // grabs data from server as an object
  response.forEach(book => {                                    //forEach is a built in function of javaScript
    // console.log(book.name)                                            //shows each book name on the console
    renderBooks(response)
    return fetch('https://anapioficeandfire.com/api/books')
  })
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
