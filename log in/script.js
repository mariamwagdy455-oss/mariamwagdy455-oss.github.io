const loginForm = document.getElementById('loginForm');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const errorElement = document.getElementById('errorMessage');

loginForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const email = emailInput.value.trim();
    const password = passwordInput.value;

    if (email === "" || password === "") {
        showError("Please fill in all fields");
        return;
    }

    const savedEmail = localStorage.getItem("registeredEmail");
    const savedPassword = localStorage.getItem("registeredPassword");

    if (email === savedEmail && password === savedPassword) {
        loginSuccess(email);
    } else {
        showError("Invalid Email or Password!");
    }
});

function showError(message) {
    errorElement.textContent = message;
    errorElement.style.color = "red";
    errorElement.style.display = "block";
}

function loginSuccess(email) {
    localStorage.setItem("currentUser", email);
    
    errorElement.textContent = "Login successful! Redirecting...";
    errorElement.style.color = "green";
    errorElement.style.display = "block";

    setTimeout(() => {
        window.location.href = "profile.html"; 
    }, 1500);
}

function toggleTheme() {
    document.body.classList.toggle('dark-theme');
    
    const isDark = document.body.classList.contains('dark-theme');
    localStorage.setItem('userTheme', isDark ? 'on' : 'off');
}
window.onload = function() {
    const savedTheme = localStorage.getItem('userTheme');
    if (savedTheme === 'on') {
        document.body.classList.add('dark-theme');
    }
}