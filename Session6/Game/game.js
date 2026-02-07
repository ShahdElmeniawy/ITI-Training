const gameArea = document.getElementById('gameArea');
const basket = document.getElementById('basket');
const scoreBoard = document.getElementById('scoreBoard');

let score = 0;
let gameInterval;
let balls = [];
let gameOver = false;

gameArea.addEventListener('mousemove', (e) => {
    const rect = gameArea.getBoundingClientRect();
    let basketX = e.clientX - rect.left - basket.offsetWidth / 2;

    if (basketX < 0) basketX = 0;
    if (basketX > gameArea.offsetWidth - basket.offsetWidth) basketX = gameArea.offsetWidth - basket.offsetWidth;

    basket.style.left = basketX + 'px';
});


function createBall() {
    const ball = document.createElement('div');
    ball.classList.add('ball');
    ball.style.left = Math.random() * (gameArea.offsetWidth - 20) + 'px';
    ball.style.top = '0px';
    gameArea.appendChild(ball);
    balls.push(ball);
}

function moveBalls() {
    for (let i = 0; i < balls.length; i++) {
        const ball = balls[i];
        let top = parseInt(ball.style.top);
        top += 5;
        ball.style.top = top + 'px';

        const basketRect = basket.getBoundingClientRect();
        const ballRect = ball.getBoundingClientRect();

        if (
            ballRect.bottom >= basketRect.top &&
            ballRect.left + 10 >= basketRect.left &&
            ballRect.right - 10 <= basketRect.right
        ) {
            score++;
            scoreBoard.textContent = "Score: " + score;
            ball.remove();
            balls.splice(i, 1);
            i--;
            continue;
        }

        if (top + ball.offsetHeight >= gameArea.offsetHeight) {
            endGame();
            break;
        }
    }
}


function endGame() {
    gameOver = true;
    clearInterval(gameInterval);
    alert("Game Over! Final Score: " + score);
}

function startGame() {
    gameInterval = setInterval(() => {
        if (gameOver) return;

        if (Math.random() < 0.03) {
            createBall();
        }

        moveBalls();
    }, 50);
}

startGame();
