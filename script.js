"use strict";
console.log("hello");

let keyEvent, keyName, keyLocation;

function keyboardInput(keyPressed) {
    keyEvent = document.getElementById(keyPressed);
    keyEvent.style.color = "green";
    keyName = "";
    keyLocation = "";
}



document.addEventListener('keydown', (event) => {
    keyLocation = event.location;
    if (keyLocation === 1) keyName = 'L';
    if (keyLocation === 2) keyName = 'R';
    if (keyLocation === 0) keyName = '';

    keyName = keyName + event.key;
    if (event.key === 'Meta') keyName = 'Meta';
    keyboardInput(keyName);

});

