"use strict";

//Дана переменная со строкой. Проверьте, что в эта строка представляет собой дробь.

let str = "12.312412";
// let counter = 0;

// let isNumbersOnly = str.split('').reduce((acc, value) => {
//     if (value === '.') {
//         counter++;
//     }
//     if (counter > 1 || isNaN(value) && value != '.') {
//         acc = false;
//     }
//     return acc;
// }, true);

if (!isNaN(str)) {
    console.log(`${str} is fractional number`)
} else {
    console.log(`${str} is not fractional number`)
}