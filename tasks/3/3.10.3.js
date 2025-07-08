"use strict";

// Даны два числа. Получите массив цифр, которые есть и в одном, и во втором числе.

let num1 = 12345;
let num2 = 45678;
let digitsArr = [];

digitsArr = String(num1).split("").reduce((acc, value) => {
    if (String(num2).includes(value)) {
        acc.push(value);
    }
    return acc;
}, []);

console.log(digitsArr);