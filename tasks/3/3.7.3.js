"use strict";

// Даны два числа. Получите массив общих делителей этих чисел.

let num1 = 12345;
let num2 = 255;

let arr = [];

for (let i = 1; i <= num1 || i <= num2; i++) {
    if (num1 % i === 0 && num2 % i === 0) {
        arr.push(i);
    }
}
console.log(arr);