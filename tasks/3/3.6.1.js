"use strict";

// Дан массив со числами. Удалите из него числа, состоящие более чем из трех цифр.

let arr = [123, 4213, 532, 12, 0, 54, 5234, 125671];

arr = arr.reduce((acc, value) => {
    if (value / 1000 < 1) {
        acc.push(value);
    }
    return acc;
}, []);

console.log(arr);