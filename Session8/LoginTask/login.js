document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('loginForm');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const rememberMeCheckbox = document.getElementById('rememberMe');
    const storageTypeRadios = document.querySelectorAll('input[name="storageType"]');

    loadSavedCredentials();

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const username = usernameInput.value;
        const password = passwordInput.value;
        const storageType = document.querySelector('input[name="storageType"]:checked').value;

        if (rememberMeCheckbox.checked) {
            saveCredentials(username, password, storageType);
        } else {
            removeCredentials(storageType);
        }

        alert(`Login attempted!\nStorage Type: ${storageType}\nRemember Me: ${rememberMeCheckbox.checked}`);
    });

    function saveCredentials(username, password, storageType) {
        const storage = storageType === 'local' ? localStorage : sessionStorage;
        const credentials = {
            username: username,
            password: password,
            timestamp: new Date().toISOString()
        };
        storage.setItem('savedCredentials', JSON.stringify(credentials));
    }

    function removeCredentials(storageType) {
        const storage = storageType === 'local' ? localStorage : sessionStorage;
        storage.removeItem('savedCredentials');
    }

    function loadSavedCredentials() {
        const localCredentials = localStorage.getItem('savedCredentials');
        const sessionCredentials = sessionStorage.getItem('savedCredentials');

        if (localCredentials) {
            const credentials = JSON.parse(localCredentials);
            usernameInput.value = credentials.username;
            passwordInput.value = credentials.password;
            rememberMeCheckbox.checked = true;
            document.querySelector('input[value="local"]').checked = true;
        } else if (sessionCredentials) {
            const credentials = JSON.parse(sessionCredentials);
            usernameInput.value = credentials.username;
            passwordInput.value = credentials.password;
            rememberMeCheckbox.checked = false;
            document.querySelector('input[value="session"]').checked = true;
        }
    }
});