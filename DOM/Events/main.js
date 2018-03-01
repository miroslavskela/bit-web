var send = document.querySelector('button');

send.onclick = function (event) {
    var input = document.querySelector('input');
    var newText = document.createElement("p");
    var div = document.querySelector(".messageBoard");
    if (input.value) {
        newText.textContent = input.value;
        div.appendChild(newText);
        input.value = "";
        console.log(event);
        
    }

}