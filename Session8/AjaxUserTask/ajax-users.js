let allUsers = [];

document.addEventListener('DOMContentLoaded', function () {
    loadAllUsers();
});


async function getUserById() {
    const userId = document.getElementById('userIdInput').value;
    const resultDiv = document.getElementById('singleUserResult');

    if (!userId) {
        resultDiv.innerHTML = '<div class="error">Please enter a User ID</div>';
        return;
    }

    resultDiv.innerHTML = '<div class="loading">Loading user data...</div>';

    try {
        const response = await fetch(`https://reqres.in/api/users/${userId}`);

        if (!response.ok) {
            throw new Error(`User not found (Status: ${response.status})`);
        }

        const data = await response.json();
        displayUser(data.data, resultDiv);

    } catch (error) {
        resultDiv.innerHTML = `<div class="error">Error: ${error.message}</div>`;
    }
}

// Load all users
async function loadAllUsers() {
    const dropdown = document.getElementById('usersDropdown');
    dropdown.innerHTML = '<option value="">Loading users...</option>';

    try {
        const response = await fetch('https://reqres.in/api/users');
        const data = await response.json();
        allUsers = data.data;

        // Populate dropdown
        dropdown.innerHTML = '<option value="">Select a user...</option>';
        allUsers.forEach(user => {
            const option = document.createElement('option');
            option.value = user.id;
            option.textContent = `${user.first_name} ${user.last_name}`;
            dropdown.appendChild(option);
        });

        // Display all users
        displayAllUsers();

    } catch (error) {
        dropdown.innerHTML = '<option value="">Error loading users</option>';
        console.error('Error loading users:', error);
    }
}

// Display selected user
function displaySelectedUser() {
    const dropdown = document.getElementById('usersDropdown');
    const userId = dropdown.value;
    const resultDiv = document.getElementById('selectedUserResult');

    if (!userId) {
        resultDiv.innerHTML = '';
        return;
    }

    const user = allUsers.find(u => u.id == userId);
    if (user) {
        displayUser(user, resultDiv);
    }
}

// Display a single user
function displayUser(user, container) {
    container.innerHTML = `
        <div class="user-card">
            <img src="${user.avatar}" alt="${user.first_name}" class="avatar">
            <div class="user-info">
                <h3>${user.first_name} ${user.last_name}</h3>
                <p><strong>ID:</strong> ${user.id}</p>
                <p><strong>Email:</strong> ${user.email}</p>
                <p>Avatar URL: <small>${user.avatar}</small></p>
            </div>
        </div>
    `;
}

// Display all users
function displayAllUsers() {
    const container = document.getElementById('allUsersList');
    container.innerHTML = '<h2>All Users</h2>';

    allUsers.forEach(user => {
        const userCard = document.createElement('div');
        userCard.className = 'user-card';
        userCard.innerHTML = `
            <img src="${user.avatar}" alt="${user.first_name}" class="avatar">
            <div class="user-info">
                <h3>${user.first_name} ${user.last_name}</h3>
                <p><strong>Email:</strong> ${user.email}</p>
                <p><strong>ID:</strong> ${user.id}</p>
            </div>
        `;
        container.appendChild(userCard);
    });
}