"use strict";
alert("Welcome! Let's get started");
let email = prompt("Enter your email address");
while (!email.includes('@')) {
    email = prompt("Enter your email address again");
}
let favoriteColor = prompt("Enter your favourite color");
alert("Hello " + email + "! Your favourite color is " + favoriteColor);
let checker = confirm("Would you like to see this again?");
if (checker) {
    window.location.reload();
} else {
    alert("Goodbye!")
}