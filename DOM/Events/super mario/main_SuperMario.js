
var container = document.querySelector('.container');
var mario = document.querySelector('img');
var overflow = document.querySelector('.overflow')


addEventListener('keydown', marioMoving);



function marioMoving(event) {
    var key = event.keyCode;
    console.log(key);


    if (key === 39) {
        mario.setAttribute('src', 'mario_running.gif');
        setInterval(moveRight, 100);

        

    } else if (key === 37) {
        mario.setAttribute('src', 'mario.png')
        
    }
}
 
function moveRight(){
 overflow.style.right = 20 + "px";
 console.log(overflow.style.right);
 
 
   
}