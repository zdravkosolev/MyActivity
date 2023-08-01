
const books = [

{
    title: "The Hobbit",
    author: "J.R.R Tolkien",
    maxPages: 200,
    onPage:60,
},

{
    title: "Harry Potter",
    author: "J.k. Rowling",
    maxPages: 250,
    onPage:150,
},

{
    title: "50 SHades of Grey",
    author: "E.L. James",
    maxPages: 150,
    onPage:150,
},

{
    title: "Don Quixote",
    author: "Miguel de Cervantes",
    maxPages: 350,
    onPage:300,
},

{
    title: "Hamlet",
    author: "William Shakespeare",
    maxPages: 550,
    onPage:550,
},
];

const bookAuthor = document.getElementById('book-title');

books.forEach(book => {
    const bookTitle = document.createElement('li');
    bookTitle.textContent = `${book.title} by ${book.author}`;
    bookTitle.style.fontSize = '20px';
    bookAuthor.appendChild(bookTitle);
  });
 

const bookList = document.getElementById('book-list');

  books.forEach(book => {
    const listItem = document.createElement('li');
    if (book.maxPages === book.onPage) {
      listItem.textContent = `You already read "${book.title}" by ${book.author}`;
      listItem.style.color = 'green';
      listItem.style.fontSize = '20px';
    } else {
      listItem.textContent = `You still need to read "${book.title}" by ${book.author}`;
      listItem.style.color = 'red';
      listItem.style.fontSize = '20px';
    }
    bookList.appendChild(listItem);
  });

const bookTableBody = document.getElementById('book-table-body');
function renderTable() {
    bookTableBody.innerHTML = '';

  books.forEach(book => {
    const progress = (book.onPage / book.maxPages) * 100;
    if (book.onPage > book.maxPages){
        alert("Please enter valid Page numbers!")
    }else{
    const row = document.createElement('tr');
    row.innerHTML = `
      <td style="font-size:20px">${book.title}</td>
      <td style="font-size:20px">${book.author}</td>
      <td style="font-size:20px">${book.maxPages}</td>
      <td style="font-size:20px">${book.onPage}</td>
      <td>
        <div style="background-color: #ddd; height: 40px; width: 100px;">
          <div style="background-color: #4caf50; height: 40px; width: ${progress}%; text-align: center; font-size: 20px; color: white;">${progress.toFixed(0)}%</div>
        </div>
      </td>
    `;
    bookTableBody.appendChild(row);}
  });
}
renderTable();

  const addBookForm = document.getElementById('add-book-form');
  const titleInput = document.getElementById('title-input');
  const authorInput = document.getElementById('author-input');
  const maxPagesInput = document.getElementById('max-pages-input');
  const onPageInput = document.getElementById('on-page-input');

  addBookForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const newBook = {
      title: titleInput.value,
      author: authorInput.value,
      maxPages: +(maxPagesInput.value),
      onPage: +(onPageInput.value)
    };
    books.push(newBook);
    renderTable();
    addBookForm.reset();
  });