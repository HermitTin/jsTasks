"use strict";

// Дано некоторое число:
// 12345
// Выведите в консоль все его символы с конца.

let number = 12345;
let numberString = String(number);

for (let i = numberString.length - 1; i >= 0; i--) {
    console.log(+numberString[i]);
}