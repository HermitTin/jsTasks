"use strict";

// Дан массив с числами. Оставьте в нем только те числа, которые делятся на 5.

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

arr = arr.reduce((acc, value) => {
    if (value % 5 == 0) {
        acc.push(value);
    }
    return acc;
}, []);

console.log(arr);