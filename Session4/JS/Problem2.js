"use strict";

function validtionNum(num) {
    while (isNaN(num)) {
        num = prompt("Please Enter a number")
    }
    return parseFloat(num);
}

function validtionOpt(opt) {
    while (opt != '+' && opt != '-' && opt != '*' && opt != '/') {
        opt = prompt("Please Enter + or - or / or * only");
    }
    return opt;
}

let frist = 0, second = 0, result = 0, opration_ = ''
document.getElementById("fristNum").onclick = function () {
    frist = validtionNum(prompt("Enter the Frist number"));
}
document.getElementById("secondNum").onclick = function () {
    second = validtionNum(prompt("Enter The second number"));
}
document.getElementById("opration").onclick = function () {
    opration_ = validtionOpt(prompt("Enter the opration ( + , - , * , /)"));
    if (opration_ == '+') result = frist + second;
    else if (opration_ == '-') result = frist - second;
    else if (opration_ == '*') result = frist * second;
    else result = frist / second;

    console.log(frist + " " + opration_ + " " + second + " = " + result);
}

