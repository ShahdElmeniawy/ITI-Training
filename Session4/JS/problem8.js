"use strict"  // Missing semicolon (Syntax error)

function calculateDiscount(price, discount) {
    if (discount > 100) {
        alert("Invalid discount");   // negative discount will passed (logical error)
    }
    finalPrice = price - (price * discount / 100); // without declaration (runtime error)

    console.log("Type of Price intermediate calculations:", typeof price);
    console.log("Type of Discount  intermediate calculations:", typeof discount);

    return finalPrice;
}

let userPrice = prompt("Enter price:");
let userDiscount = prompt("Enter discount:");

// userPrice and userDiscount is strings not numbers   (logical error)
console.log("Type of Price Before:", typeof price);
console.log("Type of Discount Before:", typeof discount);
let result = calculateDiscount(userPrice, userDiscount);
console.log("Type of result:", typeof result);
console.log("Final Price: $" + result);
