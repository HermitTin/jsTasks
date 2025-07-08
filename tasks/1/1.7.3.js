"use strict";

// Дано некоторое число:
// 12345
// Переверните его:
// 54321

let num = 12345;
let numString = String(num);
let numReversedFirst = 0;

for (let i = numString.length - 1; i >= 0; i--) {
    numReversedFirst += +numString[i] * +`1e${i}`;
}

console.log(numReversedFirst);

//or

let numReversedSecond = "";

for (let i = numString.length - 1; i >= 0; i--) {
    numReversedSecond += numString[i];
}

console.log(+numReversedSecond);