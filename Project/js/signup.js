document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById('signUp');

    const userName = document.getElementById('userName');
    const mail = document.getElementById('mail');
    const age = document.getElementById('age');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');

    const usernameInvalidText = document.getElementById('usernameInvalidText');
    const emailInvalidText = document.getElementById('emailInvalidText');
    const passwordInvalidText = document.getElementById('passwordInvalidText');
    const confirmPasswordInvalidText = document.getElementById('confirmPasswordInvalidText');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        // Extract values
        const usernameVal = userName.value.trim();
        const emailVal = mail.value.trim();
        const passwordVal = password.value;
        const confirmPasswordVal = confirmPassword.value;
        const ageVal = age.value;


        // Regex patterns
        const usernameRegex = /^[a-zA-Z0-9_]{3,15}$/;
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/;

        // --- Validation ---
        let valid = true;

        if (!usernameRegex.test(usernameVal)) {
            userName.style.border = "2px solid red";
            usernameInvalidText.style.display = "block";
            valid = false;
        } else {
            userName.style.border = "2px solid green";
            usernameInvalidText.style.display = "none";
        }

        if (!emailRegex.test(emailVal)) {
            mail.style.border = "2px solid red";
            emailInvalidText.style.display = "block";
            valid = false;
        } else {
            mail.style.border = "2px solid green";
            emailInvalidText.style.display = "none";
        }

        if (!passwordRegex.test(passwordVal)) {
            password.style.border = "2px solid red";
            passwordInvalidText.style.display = "block";
            valid = false;
        } else {
            password.style.border = "2px solid green";
            passwordInvalidText.style.display = "none";
        }

        if (passwordVal !== confirmPasswordVal) {
            confirmPassword.style.border = "2px solid red";
            confirmPasswordInvalidText.style.display = "block";
            valid = false;
        } else {
            confirmPassword.style.border = "2px solid green";
            confirmPasswordInvalidText.style.display = "none";
        }
        let users = JSON.parse(localStorage.getItem("users") || "[]");


        for (let element of users) {
            if (element.username === usernameVal) {
                userName.style.border = "2px solid red";
                usernameInvalidText.style.display = "block";
                usernameInvalidText.innerText = "Username is really exist";
                valid = false
            }
        }


        if (!valid) return;

        // Save user to localStorage
        const formData = { username: usernameVal, email: emailVal, password: passwordVal, age: ageVal };
        users.push(formData);
        localStorage.setItem("users", JSON.stringify(users));
        // Redirect to login page
        window.location.href = "./login.HTML";
    });
});
