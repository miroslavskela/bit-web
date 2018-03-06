var imgArr = ['img1.jpeg', 'img2.jpeg', 'img3.jpg', 'img4.jpg'];
var $galery = $('<div class="galery">')
var $title = $('<h1>')



// Array object
imgArr.forEach(function (element) {
    var $img = $('<img>')
    var randomNum = Math.round(399 * Math.random() + 100);
    $img.attr('src', element)
    $img.css({
        "width": randomNum + "px"
    });
    $galery.append($img);
});
$('body').prepend($galery);

$title.text("Galery");
$galery.before($title);


$("img").each(function (index, element) {
    imgWidth = parseInt(element.width);
    if (imgWidth > 200) {
        return false;
    }
    $(element).css("border", "2px green solid");
    
    
});

// $( "li" ).each(function( index, element ) {
//     // element == this
//     $( element ).css( "background-color", "yellow" );
//     if ( $( this ).is( "#stop" ) ) {
//     $( "span" ).text( "Stopped at div index #" + index );
//     return false;
//     }
//     });
    

// for (var i = 0; i < imgArr.length; i++) {
//     var $img = $('<img>')
//     $img.attr('src', imgArr[i])
//     $galery.append($img);
// } for petlja za deo zadatka sa dodavanjem slika