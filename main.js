document.addEventListener("DOMContentLoaded", function () {
    // Register Form Submission
    document.getElementById("register-form")?.addEventListener("submit", function (e) {
        e.preventDefault();

        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let password = document.getElementById("password").value;
        let confirmPassword = document.getElementById("confirm-password").value;

        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        let user = { name, email, password };
        localStorage.setItem(email, JSON.stringify(user)); // Store user details
        alert("Registration successful! You can now log in.");
        window.location.href = "index.html"; // Redirect to login
    });

    // Login Form Submission
    document.getElementById("login-form")?.addEventListener("submit", function (e) {
        e.preventDefault();

        let email = document.getElementById("login-email").value;
        let password = document.getElementById("login-password").value;

        let storedUser = localStorage.getItem(email);

        if (!storedUser) {
            alert("User not found. Please register.");
            return;
        }

        let user = JSON.parse(storedUser);

        if (user.password !== password) {
            alert("Incorrect password.");
            return;
        }

        alert("Login successful!");
        window.location.href = "dashboard.html"; // Redirect to dashboard
    });
});
