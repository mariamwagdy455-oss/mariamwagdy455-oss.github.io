window.onload = function () {
  let theme = localStorage.getItem("theme");

  if (theme === "dark") {
    document.body.classList.add("dark");
    setSunIcon();
  }

  loadUser();
};

function toggleTheme() {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
    setSunIcon();
  } else {
    localStorage.setItem("theme", "light");
    setMoonIcon();
  }
}

function setMoonIcon() {
  document.getElementById("themeIcon").innerHTML = `
    <path d="M21 12.79A9 9 0 1 1 11.21 3 
    7 7 0 0 0 21 12.79z"/>
  `;
}

function setSunIcon() {
  document.getElementById("themeIcon").innerHTML = `
    <circle cx="12" cy="12" r="5"></circle>
    <line x1="12" y1="1" x2="12" y2="3"></line>
    <line x1="12" y1="21" x2="12" y2="23"></line>
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
    <line x1="1" y1="12" x2="3" y2="12"></line>
    <line x1="21" y1="12" x2="23" y2="12"></line>
  `;
}

function loadUser() {
  let user = JSON.parse(localStorage.getItem("user"));

  if (user) {
    document.getElementById("userName").textContent = user.name;
    document.getElementById("userEmail").textContent = user.email;
  } else {
    document.getElementById("userName").textContent = "Guest";
    document.getElementById("userEmail").textContent = "No Email";
  }
}