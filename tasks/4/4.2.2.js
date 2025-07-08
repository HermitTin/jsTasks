"use strict";

//Сделайте функцию, которая параметром будет принимать число и удалять из него нули.

function removeZeroes(num) {
    num = +String(num).split("").reduce((acc, digit) => {
        if (digit != "0") {
            acc += digit;
        }
        return acc;
    }, "")
    return num;
}

console.log(removeZeroes(104023));