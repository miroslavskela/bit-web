$(function(){
 var $container = $('#container');
$container.on('click', function(){
    $container.animate({
        left: '+=300px',
        top: '+=400px',
        width: '250px',
        height: '250px'
    },1000, moveAgain)
})


    function moveAgain(){
        $container.on('click', function(){
            $container.animate({
                left: '-=200px',
                top: '-=200px',
                width: '250px',
                height: '250px'
    },1000)
})

    }
})

