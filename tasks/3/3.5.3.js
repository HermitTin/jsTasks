"use strict";

// Дан массив с числами. Оставьте в нем только те числа, которые содержат цифру ноль.

let arr = [1, 0, 3, 20, 103, 3201, 124];

arr = arr.reduce((acc, value) => {
    if (String(value).includes("0")) {
        acc.push(value);
    }
    return acc;
}, []);

console.log(arr);