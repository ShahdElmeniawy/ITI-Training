document.addEventListener("DOMContentLoaded", function () {
    let users = JSON.parse(localStorage.getItem("users") || "[]");
    const form = document.getElementById('loginForm');

    const userName = document.getElementById('userName');
    const password = document.getElementById('password');

    const InvalidText = document.getElementById('InvalidText');
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        const usernameVal = userName.value.trim();
        const passwordVal = password.value;
        let valid = false;
        const loggedUser = {
            username: usernameVal
        };
        for (let element of users) {
            if (usernameVal === element.username && passwordVal === element.password) {
                valid = true;
            }
        }
        if (!valid) {
            InvalidText.style.display = "block";
            return;
        } else {
            InvalidText.style.display = "none";
            localStorage.setItem("loggedUser", JSON.stringify(loggedUser));
            window.location.href = "./index.HTML";
        }

    });


    for (let ele of users)
        console.log(ele);

});
