"use strict";

// Дано число. Получите массив делителей этого числа.

let num = 12345;

let arr = [];

for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
        arr.push(i);
    }
}
console.log(arr);