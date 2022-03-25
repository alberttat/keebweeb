"use strict";
console.log("hello");

let keyEvent;

function keyboardInput(keyPressed) {
    keyEvent = document.getElementById(keyPressed);
    console.log(keyEvent);
    keyEvent.style.color = "green";
}



document.addEventListener('keydown', (event) => {
    const keyName = event.key;
    console.log(keyName);
    keyboardInput(keyName);
});