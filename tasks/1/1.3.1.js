"use strict";

// Дана строка. Если в этой строке более одного символа, 
// выведите в консоль предпоследний символ этой строки.

function penultStringCharacter() {
    let string = prompt("Type something", "qwerty");
    if (string.length > 1) {
        console.log(`The penult character is ${string.at(-2)}`);
    } else {
        console.log("The string is too short!");
    }
}

penultStringCharacter();