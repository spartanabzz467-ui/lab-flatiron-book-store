document.addEventListener("DOMContentLoaded", () => {

  const header = document.getElementById("header");
  header.textContent = "Flatbooks Technical Books";

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

  bookList.innerHTML = "";

  books.forEach((book) => {

    const li = document.createElement("li");

    // ADD IMAGE FIRST (IMPORTANT FOR TESTS)
    const img = document.createElement("img");
    img.src = book.image;
    img.alt = book.title;

    // ADD TEXT (do NOT overwrite li content)
    const title = document.createTextNode(book.title + " - " + book.author);

    li.appendChild(title);
    li.appendChild(img);

    bookList.appendChild(li);
  });

});