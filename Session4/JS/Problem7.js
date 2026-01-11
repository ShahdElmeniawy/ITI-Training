"use strict";

document.getElementById("enterExpression").onclick = function () {
    let checker = true;
    let expr = prompt("Enter the expression")
    while (checker) {
        checker = false;
        for (let i = 0; i < expr.length; i++) {
            if (!"012345678910+-/*".includes(expr.charAt(i)) || "+-/*".includes(expr[expr.length - 1]) || "+-/*".includes(expr[0]) || ("+-/*".includes(expr[i]) && "+-/*".includes(expr[i - 1]))) {
                checker = true;
                expr = prompt("Enter the expression");
                break;
            }
        }
    }
    let arrnum = [], arropt = [], num = "", lastop = '+';
    for (let i = 0; i < expr.length; i++) {
        if ("0123456789".includes(expr[i])) {
            num += expr[i];
        }

        if (i == expr.length - 1 || !"0123456789".includes(expr[i])) {
            if (lastop == '*' || lastop == "/") {
                if (lastop == '*')
                    arrnum[arrnum.length - 1] *= parseFloat(num);
                else
                    arrnum[arrnum.length - 1] /= parseFloat(num);
            } else {
                arrnum.push(parseFloat(num));
                arropt.push(lastop);
            }
            if (1 != expr.length) lastop = expr[i];
            num = "";
        }
    }
    let result = arrnum[0];
    for (let i = 1; i < arrnum.length; i++) {
        result += (arropt[i] == '-' ? -1 * arrnum[i] : arrnum[i]);
    }
    alert("Expression: " + expr + " | Result: " + result);
}