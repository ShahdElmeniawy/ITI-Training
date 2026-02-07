let audio = document.getElementById("Youraudio");
function playFunction() {
    audio.play();
}

function PauseFunction() {
    audio.pause();
}

let video = document.getElementById("YourVideo");
function playVFunction() {
    video.play();
}

function PauseVFunction() {
    video.pause();
}

function SoundUp() {
    video.muted = false;
    video.volume = Math.min(video.volume + 0.1, 1);
}

function SoundDown() {
    video.volume -= 0.1;
}



const star = document.getElementById("star");

star.addEventListener("mouseover", function () {
    if (star.dataset.selected === "false") {
        star.src = "./resources/Filled_star.png";
    }
});

star.addEventListener("mouseout", function () {
    if (star.dataset.selected === "false") {
        star.src = "./resources/empty_star.png";
    }
});

star.addEventListener("click", function () {
    if (star.dataset.selected === "false") {
        star.dataset.selected = "true";
        star.src = "./resources/Filled_star.png";
    } else {
        star.dataset.selected = "false";
        star.src = "./resources/empty_star.png";
    }
});