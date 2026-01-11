let username = prompt("Enter your username");
while (username.length < 3 || "0123456789".includes(username)) {
    username = prompt("Enter your username");
}
let birthday = prompt("Enter your Birthday");
while (isNaN(birthday) || birthday > 2010 || birthday < 1950) {
    birthday = prompt("Enter your Birthday");
}

let phone = prompt("Enter your Phone Number");
while (phone.length != 11) {
    phone = prompt("Enter your Phone Number");
}

let email = prompt("Enter Your Email");
while (!email.includes('@')) {
    email = prompt("Enter Your Email");
}




console.log("Registration Successful!\nUsername: " + username + "\nBirth Year: " + birthday + "\nAge:" + (2026 - parseInt(birthday))
    + "\nPhone: " + phone + "\nEmail: " + email)