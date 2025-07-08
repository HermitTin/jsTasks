"use strict";

// Дано некоторое число:
// 12345
// Получите массив цифр этого числа.

let number = 12345;
let arr = [];

for (let digit of String(number)) {
    arr.push(+digit);
}

console.log(arr);

//or

let arrSecond = []

for (let numberDivide = number; numberDivide > 0; numberDivide = Math.floor(numberDivide / 10)) {
    arrSecond.push(numberDivide % 10);
}

console.log(arrSecond);