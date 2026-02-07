function userNameValidation(username) {
    return username.length < 3 || username.length > 15 ||
        !(('a' <= username[0] && 'z' >= username[0]) || ('A' <= username[0] && 'Z' >= username[0]))
        || " ".includes(username);
}


function EmailValidation(mail) {
    let ok = false;
    if (mail.indexOf('@') != mail.lastIndexOf('@')) {
        console.error("Email Must Contains exactly one @ symbol ");
        ok = true;
    }
    if (mail[0] == '@' || mail.slice[-1] == '@') {
        console.error("Email @ is must not at the first or last position ");
        ok = true;
    }
    if (mail.indexOf('.') == -1) {
        console.error("Email Must Contains at least one dot (.)");
        ok = true;
    }
    if (mail.indexOf('.') <= mail.indexOf('@') + 1) {
        console.error("The dot is must not immediately after @");
        ok = true;
    }
    if (mail.lastIndexOf('.') <= mail.lastIndexOf('@') + 2) {
        console.error("Must are at least 2 characters between @ and the last dot");
        ok = true;
    }
    if (mail.indexOf('@') < 2) {
        console.error("Must are at least 2 characters before @");
        ok = true;
    }
    if (mail.lastIndexOf('.') > mail.length - 3) {
        console.error("Must are at least 2 characters after the last dot");
        ok = true;
    }
    return ok;
}

let userName = prompt("create your username");

while (userNameValidation(userName)) {
    userName = prompt("Enter your username");
}

alert(userName + " your code is " + userName.slice(0, 3));

let email = prompt("Enter Your Email");
while (EmailValidation(email)) {
    email = prompt("Enter Your Email");
}
