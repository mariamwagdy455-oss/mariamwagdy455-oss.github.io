document.addEventListener("DOMContentLoaded", function () {

  const themeBtn = document.querySelector(".theme-btn");
  const icon = document.getElementById("themeIcon");

  let savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    document.body.classList.add("dark");
    icon.innerHTML = `
      <circle cx="12" cy="12" r="5"></circle>
    `;
  }

  themeBtn.addEventListener("click", function () {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
      icon.innerHTML = `
        <circle cx="12" cy="12" r="5"></circle>
      `;
      localStorage.setItem("theme", "dark");
    } else {
      icon.innerHTML = `
        <path d="M21 12.79A9 9 0 1 1 11.21 3 
                 7 7 0 0 0 21 12.79z"/>
      `;
      localStorage.setItem("theme", "light");
    }

  });

});

function setGrid() {
  const container = document.getElementById("books-container");
  container.classList.remove("list");
  container.classList.add("grid");
}

function setList() {
  const container = document.getElementById("books-container");
  container.classList.remove("grid");
  container.classList.add("list");
}

const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("input", function () {
  let value = this.value.toLowerCase();
  let books = document.querySelectorAll(".book-card");

  document.addEventListener("DOMContentLoaded", function () {

  function toggleTheme() {
    document.body.classList.toggle("dark");

    let icon = document.getElementById("themeIcon");

    if (document.body.classList.contains("dark")) {
      icon.innerHTML = `
        <circle cx="12" cy="12" r="5"></circle>
        <line x1="12" y1="1" x2="12" y2="3"></line>
        <line x1="12" y1="21" x2="12" y2="23"></line>
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
        <line x1="1" y1="12" x2="3" y2="12"></line>
        <line x1="21" y1="12" x2="23" y2="12"></line>
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
      `;
      localStorage.setItem("theme", "dark");
    } else {
      icon.innerHTML = `
        <path d="M21 12.79A9 9 0 1 1 11.21 3 
                 7 7 0 0 0 21 12.79z"/>
      `;
      localStorage.setItem("theme", "light");
    }
  }

  window.toggleTheme = toggleTheme;
  let savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    document.body.classList.add("dark");
  }

});books.forEach(book => {
    let title = book.querySelector("h3").textContent.toLowerCase();

    if (title.includes(value)) {
      book.style.display = "";
    } else {
      book.style.display = "none";
    }
  });
});

function applyCategoryFilter() {
  const urlParams = new URLSearchParams(window.location.search);
  const category = urlParams.get("cat");

  if (!category) return;

  let books = document.querySelectorAll(".book-card");

  books.forEach(book => {
    let bookCat = book.querySelector(".category").textContent.trim();

    if (bookCat.toLowerCase() === category.toLowerCase()) {
      book.style.display = "";
    } else {
      book.style.display = "none";
    }
  });
}