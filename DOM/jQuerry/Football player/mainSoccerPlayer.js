"use strict";
$(function () {

    var $body = $('body');
    var $button = $('button');
    var $player = $('img');

    $body.on('click', movePlayer);
    $button.on("click", removeEvent);

    function movePlayer(event) {
        
        var currentPositionX = event.clientX;
        var currentPositionY = event.clientY;

        $player.offset({
            'top': currentPositionY - $player.height() / 2,
            'left': currentPositionX - $player.width() / 2,
        });
    }




    function removeEvent() {
        $body.off('click');
    }
})