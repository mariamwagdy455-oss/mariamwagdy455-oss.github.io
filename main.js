  let defaultAudio =
    "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3";
  let books = [
  {
    id: 1,
    title: "Alice in Wonderland",
    author: "Lewis Carroll",
    desc: "Fantasy advanture book.",
    img: "images/alice.jpg",
    pdf: "https://www.gutenberg.org/files/11/11-h/11-h.htm",
    audio: "",

    publisher: "Diwan Bookstore",
    location: "https://www.google.com/maps?q=Diwan+Bookstore+Zamalek+Cairo&output=embed",

    aboutBook: "A curious girl embarks on a fascinating trip into a fantastical sphere full of odd creatures and inventiveness.",
    aboutAuthor: "Lewis Carroll was an English writer famous for his imaginative fantasy storytelling."

  },

  {
    id: 2,
    title: "Frankenstein",
    author: "Mary Shelley",
    desc: "A scientist creates life.",
    img: "images/frank.jpg",
    pdf: "https://www.gutenberg.org/files/84/84-h/84-h.htm",
    audio: "",

    publisher: "AUC Bookstore",
    location: "https://www.google.com/maps?q=AUC+Bookstore+Tahrir+Cairo&output=embed",

    aboutBook: "A powerful story about science, ambition, and creating life beyond human limits.",
    aboutAuthor: "Mary Shelley was one of the first science fiction writers in history."

  },

  {
    id: 3,
    title: "Dracula",
    author: "Bram Stoker",
    desc: "Vampire story.",
    img: "images/dracula.jpg",
    pdf: "https://www.gutenberg.org/files/345/345-h/345-h.htm",
    audio: "",

    publisher: "Shorouk Bookstore",
    location: "https://www.google.com/maps?q=Shorouk+Bookstore+Cairo&output=embed",

    aboutBook: "A dark horror story about Count Dracula and his terrifying influence.",
    aboutAuthor: "Bram  Stoker wan an Irish writer known for creating Dracula, the iconic vampire."

  },

  {
    id: 4,
    title: "Sherlock Holmos",
    author: "Arthur Conan Doyle.",
    desc: "Detective stories.",
    img: "images/sherlock.jpg",
    pdf: "https://www.gutenberg.org/files/1661/1661-h/1661-h.htm",
    audio: "",

    publisher: "Madbouly Bookstore",
    location: "https://www.google.com/maps?q=Madbouly+Bookstore+Downtown+Cairo&output=embed",

    aboutBook: "A series of detective cases solved logic and observation.",
    aboutAuthor: "Arthur Conan Doyle was the creator of the legendery detective Sherlock Holmes."
  },

  {
    id: 5,
    title: "The Time Machine",
    author: "H.G. Wells",
    desc: "Time travel story.",
    img: "images/time.jpg",
    pdf: "https://www.gutenberg.org/files/35/35-h/35-h.htm",
    audio: "",

    publisher: "Alef Bookstore",
    location: "https://www.google.com/maps?q=Alef+Bookstore+Cairo&output=embed",

    aboutBook: "A science fiction journey exploring the future of the humanity.",
    aboutAuthor: "H.G. Wells is known as the father of the science fiction."
  },

  {
    id: 6,
    title: "Treasure Island",
    author: "Robert Louis Stevenson",
    desc: "Pirate advanture.",
    img: "images/treasure.jpg",
    pdf: "https://www.gutenberg.org/files/120/120-h/120-h.htm",
    audio: "",

    publisher: "Dar El Shorouk",
    location: "https://www.google.com/maps?q=Dar+El+Shorouk+Cairo&output=embed",

    aboutBook: "A thrilling pirate advanture full of treasure hunts and danger.",
    aboutAuthor: "Robert Louis Stevenson was a scottish novelist known for advanture stories."
  },

  {
    id: 7,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    desc: "Romance novel.",
    img: "images/pride.jpg",
    pdf: "https://www.gutenberg.org/files/1342/1342-h/1342-h.htm",
    audio: "", 

    publisher: "Diwan Bookstore",
    location: "https://www.google.com/maps?q=Diwan+Bookstore+Zamalek+Cairo&output=embed",

    aboutBook: "A romantic novel about love, society, and misunderstandings.",
    aboutAuthor: "Jane Austen was one of the greatest English novelists."

  },

  {
    id: 8,
    title: "War of the World",
    author: "H.G. Wells",
    desc: "Alien invasion story.",
    img: "images/war.jpg",
    pdf: "https://www.gutenberg.org/files/36/36-h/36-h.htm",
    audio: "",

    publisher: "AUC Bookstore",
    location: "https://www.google.com/maps?q=AUC+Bookstore+Tahrir+Cairo&output=embed",

    aboutBook: "A science fiction story about humanity fighting alien invaders.",
    aboutAuthor: "H.G. Wells was a visionary writer who shaped modern science fiction."

  }
];

let params = new URLSearchParams(window.location.search);
let id = params.get("id") || 1;
let book = books.find(b => b.id == id);

document.getElementById("title").innerText = book.title;
document.getElementById("author").innerText = book.author;
document.getElementById("desc").innerText = book.desc;
document.getElementById("img").src = book.img;

document.getElementById("content").innerHTML += `
  <section class="box">
    <h3>📖 About the Book</h3>
    <p>${book.aboutBook}</p>
  </section>

  <section class="box">
    <h3>✍ About the Author</h3>
    <p>${book.aboutAuthor}</p>
  </section>

  `;

function openPDF () {
  document.getElementById("content").innerHTML = `
    <section class="box">
      <h3>📄 PDF Version</h3>

      <iframe
        src="${book.pdf}"
        width="100%"
        height="500px"
        style="border:none;">
      </iframe>
    </section>
  `;
}

function showAudio() {
  let audioSrc = book.audio ? book.audio : defaultAudio;

  document.getElementById("content").innerHTML = `
    <section class = "box">
      <h3>🎧 Audio Version</h3>

      <audio controls style="width:100%" autoplay>
        <source src="${audioSrc}" type="audio/mpeg">
      </audio>
    </section>
  `;
}

document.getElementById("content").innerHTML += `
    <section class="box">
      <h3>📍 Publisher Location</h3>

      <iframe
        src="${book.location}"
        width="100%"
        height="300"
        style="border:0; border-radius:10px;">
      </iframe>
    </section>
  `;

function addToFavorites () {
  let favs =  JSON.parse(localStorage.getItem("favorites")) || [];

  if (!favs.includes(book.id)) {
    favs.push(book.id);
    localStorage.setItem("favorites", JSON.stringify(favs));
    alert("Added to favorites 💌");
  } else {
    alert("Already in favorites!");
  }
}

function toggleTheme() {
  document.body.classList.toggle("dark");

  let icon = document.getElementById("themeIcon");

  if(document.body.classList.contains("dark")){

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

let stars =document.querySelectorAll("#stars span");
let ratingText = document.getElementById("ratingText");

stars.forEach((star, index) => {
  star.addEventListener("click", () => {
    stars.forEach((s, i) => {
      s.classList.toggle("active", i <= index);
    });

    ratingText.innerText = "Rated " + (index + 1) + " ⭐";
    localStorage.setItem("rating_" + book.id, index + 1);
  });
});


window.onload = function () {
  let saved = localStorage.getItem("theme");

  if (saved === "dark"){
    document.body.classList.add("dark");
  }
};