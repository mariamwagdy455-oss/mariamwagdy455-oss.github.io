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


const form = document.getElementById("registerForm");

if (form) {

    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const confirmPasswordInput = document.getElementById("confirmPassword");

    const error = document.getElementById("error");
    const success = document.getElementById("success");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        error.innerText = "";
        success.innerText = "";

        if (
            nameInput.value === "" ||
            emailInput.value === "" ||
            passwordInput.value === "" ||
            confirmPasswordInput.value === ""
        ) {
            error.innerText = "All fields are required";
            return;
        }

        if (!emailInput.value.includes("@")) {
            error.innerText = "Invalid email";
            return;
        }

        if (passwordInput.value !== confirmPasswordInput.value) {
            error.innerText = "Passwords do not match";
            return;
        }

        let users = JSON.parse(localStorage.getItem("users")) || [];

        let exists = users.find(u => u.email === emailInput.value);

        if (exists) {
            error.innerText = "Email already exists";
            return;
        }

        const newUser = {
            name: nameInput.value,
            email: emailInput.value,
            password: passwordInput.value
        };

        users.push(newUser);

        localStorage.setItem("users", JSON.stringify(users));
        localStorage.setItem("currentUser", JSON.stringify(newUser));

        success.innerText = "Registered successfully ✅";

        form.reset();

        setTimeout(() => {
            window.location.href = "profile.html";
        }, 1000);
    });
}