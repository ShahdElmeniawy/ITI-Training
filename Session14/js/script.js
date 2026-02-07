let images = document.querySelectorAll(".image");

images.forEach(element => {
    element.addEventListener("dragstart", function (e) {
        e.dataTransfer.setData("img", this.id);
    })
});

let dropBox = document.getElementById("dropBox");
let score = document.getElementById("score");
let cnt = sessionStorage.getItem("score")
    ? parseInt(sessionStorage.getItem("score"))
    : 0;

dropBox.addEventListener("dragover", function (e) {
    e.preventDefault();
})

dropBox.addEventListener("drop", function (e) {
    e.preventDefault();
    let id = e.dataTransfer.getData("img");
    let element = document.getElementById(id);
    if (id == "image2") return;
    dropBox.style.border = "green solid 3px";
    dropBox.style.backgroundColor = "lightcyan";
    dropBox.appendChild(element);
    cnt++;
    sessionStorage.setItem("score", cnt);
    score.textContent = `Score: ${cnt}`;

});
score.textContent = `Score: ${cnt}`;


let hair = document.querySelector(".hair");
let eye = document.querySelectorAll(".eye");
let nose = document.querySelectorAll(".noise");
let mouth = document.querySelectorAll(".mouth");
let face = document.querySelector(".face");

eye.forEach((e) => {
    e.addEventListener("mouseover", function () {
        let element = document.getElementById("organ");
        element.textContent = `Eyes`;
    })
})


nose.forEach((e) => {
    e.addEventListener("mouseover", function () {
        let element = document.getElementById("organ");
        element.textContent = `Nose`;
    })
})


mouth.forEach((e) => {
    e.addEventListener("mouseover", function () {
        let element = document.getElementById("organ");
        element.textContent = `Mouth`;
    })
})


hair.onmouseover = function () {
    let element = document.getElementById("organ");
    element.textContent = `Hair`;
}


face.onmouseover = function () {
    let element = document.getElementById("organ");
    element.textContent = `Face`;
}




const canvas = document.getElementById("faceCanvas");
const ctx = canvas.getContext("2d");


function drawFace(isSmile = false, scaleX = 1) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);


    ctx.save();
    ctx.translate(canvas.width / 2, canvas.height / 2);
    ctx.scale(scaleX, 1);
    ctx.translate(-canvas.width / 2, -canvas.height / 2);



    ctx.beginPath();
    ctx.arc(150, 150, 100, 0, Math.PI * 2);
    ctx.fillStyle = "#FFD966";
    ctx.fill();
    ctx.stroke();



    ctx.beginPath();
    ctx.arc(110, 130, 10, 0, Math.PI * 2);
    ctx.arc(190, 130, 10, 0, Math.PI * 2);
    ctx.fillStyle = "#000";
    ctx.fill();



    ctx.beginPath();
    if (isSmile) {
        ctx.arc(150, 160, 50, 0, Math.PI, false);
    } else {
        ctx.arc(150, 190, 50, Math.PI, 0, false);
    }
    ctx.stroke();


    ctx.restore();
}

drawFace(false, 1);


canvas.addEventListener("mousedown", () => {
    drawFace(true, 1.3);
});


canvas.addEventListener("mouseup", () => {
    drawFace(false, 1);
});





const canvas2 = document.getElementById("canvas");
const ctx2 = canvas2.getContext("2d");

let isDrawing = false;
let mode = "draw";

canvas2.addEventListener("contextmenu", e => e.preventDefault());

canvas2.addEventListener("mousedown", function (e) {
    isDrawing = true;

    if (e.button === 0) {
        mode = "draw";
    } else if (e.button === 2) {
        mode = "erase";
    }
    ctx2.beginPath();
    ctx2.moveTo(e.offsetX + 100, e.offsetY + 55);
});

canvas2.addEventListener("mousemove", function (e) {
    if (!isDrawing) return;

    if (mode === "draw") {
        canvas2.style.cursor = "crosshair";
        ctx2.globalCompositeOperation = "source-over";
        ctx2.strokeStyle = "black";
        ctx2.lineWidth = 4;
    } else {
        canvas2.style.cursor = `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'  width='40' height='48' viewport='0 0 100 100' style='fill:black;font-size:24px;'><text y='50%'>🪌</text></svg>") 16 0,auto`;
        ctx2.globalCompositeOperation = "destination-out";
        ctx2.lineWidth = 100;
    }

    ctx2.lineTo(e.offsetX + 100, e.offsetY + 55);
    ctx2.stroke();
});

canvas2.addEventListener("mouseup", stopDrawing);
canvas2.addEventListener("mouseleave", stopDrawing);

function stopDrawing() {
    isDrawing = false;
    ctx2.closePath();
}


let locationbtn = document.getElementById("locationBtn");
let locationWindow = document.getElementById("win");

locationbtn.onclick = function () {
    navigator.geolocation.getCurrentPosition(
        function (pos) { 
            let lat = pos.coords.latitude;
            let lng = pos.coords.longitude;
            console.log(lat + " " + lng);
            locationWindow.src = `https://www.google.com/maps?q=${lat},${lng}&z=15&output=embed`;
        },
        function (error) { 

            alert("Location permission denied.");
        }
    );
};
