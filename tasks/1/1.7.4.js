"use strict";

// Дано некоторое число:
// 12345
// Найдите сумму цифр этого числа.

let number = 12345;
let stringNumber = String(number);
let sum = 0;

for (let i = 0; i < stringNumber.length; i++) {
    sum += +stringNumber[i];
}

console.log(sum);