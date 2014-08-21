function setRandomBackgroundColor(element){
    'use strict';
    element.style.backgroundColor = getRandomColor();
}

function getRandomColor(){
    'use strict';
    var r = Math.floor(Math.random()*256);
    var g = Math.floor(Math.random()*256);
    var b = Math.floor(Math.random()*256);
    return ( "rgb(" + r + "," + g + "," + b + ")" );
}

function main(){
    'use strict';
    var elements = document.getElementsByClassName("row_data");

    for (var i = 0; i < elements.length; i++){
        setRandomBackgroundColor(elements[i]);
    }
}
main();

