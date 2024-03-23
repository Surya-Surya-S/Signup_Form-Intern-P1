document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('signupForm');
    const submitBtn = document.getElementById('submitBtn');

    submitBtn.addEventListener('click', function(event) {
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        const usernameError = document.getElementById('usernameError');
        const emailError = document.getElementById('emailError');
        const passwordError = document.getElementById('passwordError');

        // Clear previous error messages
        usernameError.textContent = '';
        emailError.textContent = '';
        passwordError.textContent = '';

        if (username.trim() === '') {
            usernameError.textContent = 'Username is required';
            return;
        }

        if (username.length < 6) {
            usernameError.textContent = 'Username must be at least 6 characters long';
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            emailError.textContent = 'Invalid email format';
            return;
        }

        if (password.trim() === '') {
            passwordError.textContent = 'Password is required';
            return;
        }

        if (password.length < 12) {
            passwordError.textContent = 'Password must be at least 12 characters long';
            return;
        }

        if (!/[0-9]/.test(password) || !/[!@#$%^&*]/.test(password) || !/[a-z]/.test(password) || !/[A-Z]/.test(password)) {
            passwordError.textContent = 'Password mu at least one number, one uppercase, one lowercase, 1 special char';
            return;
        }

        // If all validations pass, redirect to index.html
        window.location.href = "index.html";
    });
});