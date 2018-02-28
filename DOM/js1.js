var div = document.querySelector("div");
var image = div.firstElementChild.className = "selected";



function remove() {
    var borderImage = div.firstElementChild;
    borderImage.className = "";

    borderImage.parentNode.nextElementSibling.firstElementChild.nextElementSibling.className = "selected";

};

// function buildDropdownMenu(arr, parent) {
//     var select = document.createElement('select');
   
//     for (var i = 0; i < arr.length; i++) {
//         var arrValue = arr[i];
//         var option = document.createElement('option');
//         option.value = arrValue;
//         option.textContent = arrValue;
//         select.appendChild(option);
//     }
//     parent.appendChild(select)
//     select.className = 'capitalize';
    
// }


function buildDropdownMenu(arr, parent) {
    var select;
    
    for (var i = 0; i < 2; i++) {
        select = document.createElement('select' + [i]);
       
        for (var j = 0; j < arr.length; j++){
        var arrValue = arr[j];
        var option = document.createElement('option');
        option.value = arrValue;
        option.textContent = arrValue;
        select.appendChild(option);
    }}
    for (i = 0; i <3; i++){
    parent.appendChild(select)
    select.className = 'capitalize';
}
}

buildDropdownMenu(["saab", "opel", "audi"], document.querySelector("#s"));