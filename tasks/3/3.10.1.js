"use strict";

// Дан массив. Сделайте так, чтобы в нем каждый элемент повторился два раза.

let arr = [1, 2, 3, 4 ,5];

arr = arr.reduce((acc, value) => {
    acc.push(value);
    acc.push(value);
    return acc;
}, []);

console.log(arr);