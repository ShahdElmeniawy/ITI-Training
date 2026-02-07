//-------------------------------------------------------------------------
// task 1
//-------------------------------------------------------------------------

// let box = document.getElementById("textBox");

// box.addEventListener("keydown", function (event) {
//     alert(String.fromCharCode(event.keyCode));
// });


// //-------------------------------------------------------------------------
// // task 2
// //-------------------------------------------------------------------------


// box.addEventListener("mousedown", function (event) {
//     let output;
//     if (event.button == 0) output = "Left Mouse button";
//     else if (event.button == 1) output = "Middle Mouse button";
//     else output = "Right Mouse button";

//     alert(output);
// });

// let startClock = document.getElementById("startClock");
// let timer = null;
// startClock.addEventListener("click", function () {
//     alert("Clock Started");
//     let clockBox = document.getElementById("showing");
//     if (!timer) {
//         timer = setInterval(() => {
//             clockBox.innerText = new Date().toLocaleTimeString();
//         }, 1000);
//     }

// })


// document.addEventListener("keydown", function (event) {
//     if (event.altKey && event.key.toLowerCase() === "w") {
//         if (timer != null) {
//             clearInterval(timer);
//             timer = null;
//             alert("Clock stopped");
//         }
//     }
// });


//-------------------------------------------------------------------------
// task 3
//-------------------------------------------------------------------------


// let images = document.querySelectorAll(".game");
// let counter = 0;

// function incCounter() {
//     counter++;
// }

// function alartScore() {
//     alert("Score: " + counter);
// }

// function gameover() {
//     alert("Game Over");
// }


// for (image of images) {
//     image.addEventListener("click", incCounter);
//     image.addEventListener("click", alartScore);
// }

// setTimeout(function () {
//     for (image of images) {
//         image.removeEventListener("click", alartScore);
//         image.addEventListener("click", gameover);

//     }
// }, 3000);


//-------------------------------------------------------------------------
// task 4
//-------------------------------------------------------------------------

// let params = new URLSearchParams(window.location.search);

// let userName = params.get("username");   // first

// document.getElementById("welcome").innerText =
//     "Welcome " + userName;


//-------------------------------------------------------------------------
// task 5
//-------------------------------------------------------------------------


// let adWindow = null;

// document.getElementById("openAd").addEventListener("click", function (event) {
//     event.preventDefault();   // second

//     setTimeout(function () {
//         adWindow = window.open("", "", "width=500,height=400");

//         if (adWindow) {
//             adWindow.document.write(`
//                 <html>
//                 <head>
//                     <title>Advertisement</title>
//                 </head>
//                 <body>
//                     <h2>Special Offer!</h2>
//                     <p>
//                         This is a long advertising paragraph. Our product is designed
//                         to provide the best quality and performance. We guarantee
//                         customer satisfaction and amazing results.
//                     </p>
//                     <p>
//                         Don’t miss this opportunity. Join thousands of happy users
//                         who have already benefited from our services. Act now and
//                         enjoy exclusive deals available for a limited time only.
//                     </p>
//                 </body>
//                 </html>
//             `);
//         }
//     }, 3000);
// });

// document.getElementById("closePage").addEventListener("click", function (event) {
//     event.preventDefault();
//     window.close();
// });


//-------------------------------------------------------------------------
// task 6
//-------------------------------------------------------------------------





//-------------------------------------------------------------------------
// task 7
//-------------------------------------------------------------------------

const firstNameInput = document.getElementById('firstName');

firstNameInput.addEventListener('keydown', function (event) {
    const key = event.key;
    if (
        (key >= 'a' && key <= 'z') ||
        (key >= 'A' && key <= 'Z') ||
        key === 'Backspace' ||
        key === 'Delete' ||
        key === 'ArrowLeft' ||
        key === 'ArrowRight' ||
        key === ' '
    ) {
    } else {
        event.preventDefault();
    }
});
