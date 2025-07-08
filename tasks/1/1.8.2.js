"use strict";

// Заполните массив четными числами из промежутка от 1 до 100.

let arr = [];

for (let i = 1; i < 100; i += 2) {
    arr.push(i + 1);
}

console.log(arr);