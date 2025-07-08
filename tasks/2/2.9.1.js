"use strict";

// Дано некоторое число:
// 123456
// Найдите сумму пар цифр этого числа. 
// В нашем случае имеется ввиду следующее:
// 12 + 34 + 56

let num = 123456;
let pairSum = String(num).split("").reduce((acc, elem, index, arr) => {
    if (index % 2 === 0) {
        acc = acc + +(String(elem) + arr[index + 1]);
    }
    return acc;
}, 0);

console.log(pairSum);
