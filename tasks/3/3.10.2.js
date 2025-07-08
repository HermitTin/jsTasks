"use strict";

// Дан массив и число. Оставьте в массиве только те числа, которые являются делителями заданного числа.

let arr = [12, 4, 56, 32, 6, 25, 876];
let numb = 3;

arr = arr.reduce((acc, value) => {
    if (value % numb === 0) {
        acc.push(value);
    }
    return acc;
}, []);

console.log(arr);