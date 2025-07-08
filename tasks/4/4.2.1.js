"use strict";

//Сделайте функцию, которая параметром будет принимать число и возвращать сумму его цифр.

function digitsSum(num) {
    let sum = 0;
    while (num > 0) {
        sum += num % 10;
        num = Math.trunc(num / 10);
    }
    return sum;
}

console.log(digitsSum(123));