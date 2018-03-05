var container = document.querySelector('.container');
var mario = document.querySelector('img');
var overflow = document.querySelector('.overflow')
overflow.style.right = "20px";


addEventListener('keydown', marioMoving);
addEventListener('keydown', marioJump);
addEventListener('keyup', marioDown);


function marioMoving(event) {
    var key = event.keyCode;
    //console.log(key);
    if (key === 39) {
        mario.setAttribute('src', 'mario_running.gif');
        var setMoving = setInterval(moveRight, 100);
    }
    if (key === 37) {
        clearInterval(setMoving);
        mario.setAttribute('src', 'mario.png');
    }
}


function moveRight() {
    overflow.style.right = parseInt(overflow.style.right) + 20 + 'px';
    console.log(overflow.style.right);
}

function marioJump(event) {
    var keyJump = event.keyCode;
    if (keyJump === 32) {
        mario.style.top = 220 + "px";
    }
}

function marioDown(event) {
    var keyDown = event.keyCode;
    if (keyDown === 32) {
        mario.style.top = 310 + "px";
    }
}


//verzija 2

// var container = document.querySelector('.container');
// var mario = document.querySelector('img');
// var overflow = document.querySelector('.overflow')
// overflow.style.right = "20px";


// addEventListener('keydown', marioMoving);
// addEventListener('keyup', marioStop)
// addEventListener('keydown', marioJump);
// addEventListener('keyup', marioDown);


// function marioMoving(event) {
//     var key = event.keyCode;
//     //console.log(key);
//     if (key === 39) {
//         mario.setAttribute('src', 'mario_running.gif');
//         overflow.style.right = parseInt(overflow.style.right) + 20 + 'px';
//     }
// }
//  function marioStop(event) {
//     var key = event.keyCode;
//       if (key === 39) {
//         overflow.style.right = '20px';
//         mario.setAttribute('src', 'mario.png');
//     }
// }


// function moveRight() {
   
//     console.log(overflow.style.right);
// }

// function marioJump(event) {
//     var keyJump = event.keyCode;
//     if (keyJump === 32) {
//         mario.style.top = 220 + "px";
//     }
// }

// function marioDown(event) {
//     var keyDown = event.keyCode;
//     if (keyDown === 32) {
//         mario.style.top = 310 + "px";
//     }
// }