const step = 5;
const degree = 15;
let angle = 0;

function init() {
    let ball = document.getElementById("ball");
    ball.style.width = "100px";
    ball.style.height = "100px";
    ball.style.position = "relative";
    ball.style.left = "0px";
    ball.style.top = "0px";
    ball.style.transition = '.2s';

    window.addEventListener("keydown", controlBall);
}

function controlBall(evt) {
    switch (evt.keyCode) {
        case 38: //up
            {
                moveUp();
                break;
            }
        case 40: //down
            {
                moveDown();
                break;
            }
        case 37: //left
            {
                moveLeft();
                break;
            }
        case 39: //right
            {
                moveRight();
                break;
            }
        default:
            {
                alert('please using one in four keys up/down/left/right.')
                break;
            }

    }
}


function moveRight() {
    let ball = document.getElementById("ball");
    let ballWidth = parseInt(ball.style.width);
    if (parseInt(ball.style.left) + ballWidth < window.innerWidth) {
        ball.style.left = `${parseInt(ball.style.left) + step}px`;
        ball.style.transform = `rotate(${angle+=degree}deg)`;
    }
}

function moveLeft() {
    let ball = document.getElementById("ball");
    let ballWidth = parseInt(ball.style.width);
    if (parseInt(ball.style.left) > 0) {
        ball.style.left = `${parseInt(ball.style.left) - step}px`;
        ball.style.transform = `rotate(${angle-=degree}deg)`;
    }
}

function moveDown() {
    let ball = document.getElementById("ball");
    let ballHeight = parseInt(ball.style.height);
    if (parseInt(ball.style.top) + ballHeight < window.innerHeight) {
        ball.style.top = `${parseInt(ball.style.top) + step}px`;
        ball.style.transform = `rotate(${angle+=degree}deg)`;
    }
}

function moveUp() {
    let ball = document.getElementById("ball");
    let ballHeight = parseInt(ball.style.height);
    if (parseInt(ball.style.top) > 0) {
        ball.style.top = `${parseInt(ball.style.top) - step}px`;
        ball.style.transform = `rotate(${angle-=degree}deg)`;
    }
}