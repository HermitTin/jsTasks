"use strict";

//Дана переменная со строкой. Проверьте, что в эта строка 
// представляет собой число, то есть состоит только из цифр.

let str = "312412";
// let isNumbersOnly = str.split('').reduce((acc, value) => {
//     if (isNaN(+value)) {
//         acc = false;
//     }
//     return acc;
// }, true);

if (!isNaN(str)) {
    console.log(`${str} consists only of digits`)
} else {
    console.log(`${str} consists not only of digits`)
}