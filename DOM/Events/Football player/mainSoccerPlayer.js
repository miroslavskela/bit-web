"use strict";


var body = document.querySelector('body');
var button = document.querySelector('button');
var player = document.querySelector('img');

body.addEventListener('click', movePlayer);
button.addEventListener('click', removeEvent);

function movePlayer(event) {
    var currentPositionX = event.clientX;
    var currentPositionY = event.clientY;
    player.style.top = currentPositionY - (player.height) / 2 + "px";
    player.style.left = currentPositionX - (player.width) / 2 + "px";
}

function removeEvent() {
    body.removeEventListener('click', movePlayer);
}