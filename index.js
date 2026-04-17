document.addEventListener("DOMContentLoaded", () => {

  // FIX HEADER
  const header = document.getElementById("header");
  header.textContent = "Flatbooks Technical Books";

  // BOOK DATA (must include ALL books)
  const books = [
    {
      title: "Eloquent JavaScript: A Modern Introduction to Programming",
      author: "Marijn Haverbeke",
      image: "https://images-na.ssl-images-amazon.com/images/I/51bRhyVTVGL.jpg"
    },
    {
      title: "JavaScript and JQuery: Interactive Front-End Web Development",
      author: "Jon Duckett",
      image: "https://images-na.ssl-images-amazon.com/images/I/91asIC1fRwL.jpg"
    },
    {
      title: "Cracking the Coding Interview",
      author: "Gayle Laakmann McDowell",
      image: "https://images-na.ssl-images-amazon.com/images/I/41y1p7o1gQL.jpg"
    }
  ];

  const bookList = document.getElementById("book-list");

  // CLEAR EXISTING CONTENT
  bookList.innerHTML = "";

  books.forEach(book => {

    const li = document.createElement("li");

    // IMPORTANT: text first
    li.innerHTML = `
      <p>${book.title}</p>
      <p>${book.author}</p>
      <img src="${book.image}" alt="${book.title}">
    `;

    bookList.appendChild(li);
  });

});