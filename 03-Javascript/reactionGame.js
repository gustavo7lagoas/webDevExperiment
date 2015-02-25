"use strict";
/*
 * the visibility trick could be done with style.display none/block
 */
var clickedTime, createdTime, reactionTime;

function vanishBox() {

    document.getElementById("gamebox").style.visibility="hidden";

}

function materializeBox() {

    var timeout = Math.random() * 2000;
    var randomLeft = Math.floor(Math.random()*500);
    var randomTop = Math.floor(Math.random()*500);
    var randomCircle = Math.floor(Math.random()*2);

    setTimeout(function() {

        if(Math.random() > 0.5) {
            document.getElementById("gamebox").style.borderRadius = "100px";
        } else {
            document.getElementById("gamebox").style.borderRadius = "0px";
        }
        document.getElementById("gamebox").style.backgroundColor = getRandomColor();
        document.getElementById("gamebox").style.visibility = "visible";
        document.getElementById("gamebox").style.marginLeft = randomLeft + 'px';
        document.getElementById("gamebox").style.marginTop = randomTop + 'px';


        createdTime = Date.now();

    }, timeout);

}

function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

document.getElementById("gamebox").onclick=function() {

    clickedTime = Date.now();
    reactionTime = (clickedTime - createdTime)/1000;

    vanishBox();

    materializeBox();

    document.getElementById("reactionTime").innerHTML=reactionTime;

};

materializeBox();

