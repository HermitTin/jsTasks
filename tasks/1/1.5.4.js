"use strict";

// Даны два целых числа. Найдите остаток от деления первого числа на второе.

let numberFirst = +prompt("Enter first number", 1);
let numberSecond = +prompt("Enter second number", 2);

console.log(`THe remeiner of dividing ${numberFirst} by ${numberSecond} is ${numberFirst % numberSecond}`);