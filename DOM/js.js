// document.getElementsByTagName("ul")[1].className="background";

var lists = document.querySelectorAll('ul');
var secondList = lists[1];
secondList.className = ('background');

document.querySelector('ul').className = "background1";

var a = document.querySelectorAll('li');

for (var index = 0; index < a.length; index++) {
    a[index].className = "color";

};


var thirdList = lists[2].childNodes;
for (var index = 0; index < thirdList.length; index++) {
    thirdList[index].className = "background2";

};

var divs = document.querySelectorAll('div');
var div = divs[1];
var uls = div.childNodes;
var lis = uls[1];
var aaaa = lis.childNodes;
aaaa[1].className = ('active');