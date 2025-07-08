"use strict";

// Дан массив с числами. 
// Найдите сумму квадратных корней элементов этого массива.

let arr = [1, 2, 3, 4, 5];
let sum = 0;

for (let elem of arr) {
    sum += elem ** 0.5;
}

console.log(sum);

