"use strict";


let keyEvent, keyName, keyLocation, keyboardSize;
const keyboard = document.getElementById("keyboardSize");


function keyboardInput(keyPressed) {
    keyEvent = document.getElementById(keyPressed);
    keyEvent.style.color = 'green';

    console.log(keyEvent);
    keyName = "";
    keyLocation = "";
}

document.addEventListener('keydown', (event) => {
    keyLocation = event.location;
    if (keyLocation === 1) keyName = 'l';
    if (keyLocation === 2) keyName = 'r';
    if (keyLocation === 0) keyName = '';

    keyName = keyName + event.key;
    console.log(keyName);
    if (event.key === 'Meta') keyName = 'meta';
    console.log(keyName);
    keyboardInput(keyName.toLowerCase());

});


keyboard.addEventListener('change', (event) => {
    keyboardSize = event.target.value;
});

/*need to figure out capital letters
other board layouts
*/