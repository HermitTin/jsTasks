"use strict";

// Дан массив с числами. После каждого однозначного числа вставьте еще такое же.

let arr = [1, 23, 412, 52, 3, 64, 7];

arr = arr.reduce((acc, value) => {
    if (value / 10 < 1) {
        acc.push(value);
        acc.push(value);
    } else {
        acc.push(value);
    }
    return acc;
}, []);

console.log(arr);