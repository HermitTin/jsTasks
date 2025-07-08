"use strict";

// Заполните массив случайными числами из промежутка от 1 до 100

let arr = [];

for (let i = 0; i < 10; i++) {
    arr[i] = +(1 + Math.random() * (100 - 1)).toFixed(1);
}

console.log(arr);