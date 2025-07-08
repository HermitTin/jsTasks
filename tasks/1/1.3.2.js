"use strict";

// Даны два целых числа. 
// Проверьте, что первое число без остатка делится на второе.

function numbersDivide() {
    let numberFirst = Math.round(+prompt("Enter first number", 1));
    let numberSecond = Math.round(+prompt("Enter second number", 1));
    if (numberFirst % numberSecond == 0) {
        console.log(`${numberFirst} is divisible by ${numberSecond} without a remainder!`);
    } else {
        console.log(`${numberFirst} is divisible by ${numberSecond} with a remainder!`);
    }
}

numbersDivide();