document.addEventListener("DOMContentLoaded", () => {

  // -----------------------------
  // 1. UPDATE HEADER TITLE
  // -----------------------------
  const header = document.querySelector("h1");
  header.textContent = "Flatbook Library";

  // -----------------------------
  // 2. BOOK DATA (usually provided in lab already)
  // -----------------------------
  const books = [
    {
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
      image: "https://via.placeholder.com/150"
    },
    {
      title: "1984",
      author: "George Orwell",
      image: "https://via.placeholder.com/150"
    },
    {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      image: "https://via.placeholder.com/150"
    }
  ];

  // -----------------------------
  // 3. SELECT CONTAINER
  // -----------------------------
  const container = document.getElementById("book-list");

  // -----------------------------
  // 4. CREATE BOOK ELEMENTS
  // -----------------------------
  books.forEach((book) => {

    // book container
    const bookContainer = document.createElement("div");
    bookContainer.classList.add("book-container");

    // title
    const bookTitle = document.createElement("h3");
    bookTitle.textContent = book.title;

    // author
    const bookAuthor = document.createElement("p");
    bookAuthor.textContent = book.author;

    // image
    const bookImage = document.createElement("img");
    bookImage.src = book.image;
    bookImage.alt = book.title;

    // append elements to container
    bookContainer.appendChild(bookImage);
    bookContainer.appendChild(bookTitle);
    bookContainer.appendChild(bookAuthor);

    // append book to DOM
    container.appendChild(bookContainer);
  });

});