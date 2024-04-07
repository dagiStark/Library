const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;

  this.info = () => {
    return `Title: ${title} <br>Author: ${author} <br>Pages: ${pages} <br>Status: ${read}`;
  };
}

const dialog = document.querySelector("#modal");
const showButton = document.querySelector(".show-button");

showButton.addEventListener("click", () => {
  dialog.showModal();
});

const form = document.querySelector(".form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const title = document.getElementById("title");
  const author = document.getElementById("author");
  const pages = document.getElementById("pages");

  const myBook = new Book(title.value, author.value, pages.value, "Not Read");
  myLibrary.push(myBook);

  const bookStore = document.querySelector(".book-store");
  const eachBook = document.createElement("div");
  eachBook.classList.add("book-store");
  eachBook.innerHTML = `
    <div id="each-book">
      <p>Title: ${myBook.title}.</p>
      <p>Author: ${myBook.author}.</p>
      <p>Pages: ${myBook.pages}.</p>
      <button class="remove-btn">Remove</button>
    </div>
  `;

  bookStore.appendChild(eachBook);
  dialog.close();

  // Add event listener for the remove button
  const removeBtn = eachBook.querySelector(".remove-btn");
  removeBtn.addEventListener("click", () => {
    removeBook(eachBook);
  });
});

function removeBook(eachBook) {
  eachBook.remove();
}
