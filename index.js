document.addEventListener("DOMContentLoaded", () => {

  // -----------------------------
  // 1. FIX HEADER TEXT (IMPORTANT)
  // -----------------------------
  const header = document.getElementById("header");
  header.textContent = "Flatbooks Technical Books";

  // -----------------------------
  // 2. BOOK DATA (use lab-provided data if exists)
  // -----------------------------
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
    }
  ];

  // -----------------------------
  // 3. SELECT BOOK LIST
  // -----------------------------
  const bookList = document.getElementById("book-list");

  // -----------------------------
  // 4. CLEAR EXISTING LIST (IMPORTANT FOR TESTS)
  // -----------------------------
  bookList.innerHTML = "";

  // -----------------------------
  // 5. CREATE LIST ITEMS
  // -----------------------------
  books.forEach((book) => {

    const li = document.createElement("li");

    // title
    const title = document.createElement("h3");
    title.textContent = book.title;

    // author
    const author = document.createElement("p");
    author.textContent = book.author;

    // image
    const image = document.createElement("img");
    image.src = book.image;
    image.alt = book.title;

    // append to li
    li.appendChild(title);
    li.appendChild(author);
    li.appendChild(image);

    // append to DOM
    bookList.appendChild(li);
  });

});