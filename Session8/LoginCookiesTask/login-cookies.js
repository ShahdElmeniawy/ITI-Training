document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('loginForm');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const rememberMeCheckbox = document.getElementById('rememberMe');
    const cookieDisplay = document.getElementById('cookieDisplay');

    // Display current cookies
    updateCookieDisplay();

    // Load saved credentials from cookies
    loadCredentialsFromCookies();

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const username = usernameInput.value;
        const password = passwordInput.value;
        const rememberMe = rememberMeCheckbox.checked;

        if (rememberMe) {
            // Save credentials in cookies with 30-day expiration
            setCookie('username', username, 30);
            setCookie('password', password, 30);
            alert('Credentials saved in cookies for 30 days');
        } else {
            // Remove saved credentials
            deleteCookie('username');
            deleteCookie('password');
            alert('Credentials not saved (cookies cleared)');
        }

        // Update cookie display
        updateCookieDisplay();

        console.log('Login attempted with cookies');
    });

    function loadCredentialsFromCookies() {
        const username = getCookie('username');
        const password = getCookie('password');

        if (username && password) {
            usernameInput.value = username;
            passwordInput.value = password;
            rememberMeCheckbox.checked = true;
        }
    }

    function updateCookieDisplay() {
        const cookies = document.cookie;
        cookieDisplay.textContent = cookies || 'No cookies found';
    }
});

// Cookie helper functions
function setCookie(name, value, days) {
    let expires = "";
    if (days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/; SameSite=Strict";
}

function getCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

function deleteCookie(name) {
    document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
}

function clearAllCookies() {
    const cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i];
        const eqPos = cookie.indexOf("=");
        const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        deleteCookie(name.trim());
    }
    document.getElementById('cookieDisplay').textContent = 'All cookies cleared';
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
    document.getElementById('rememberMe').checked = false;
}