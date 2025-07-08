"use strict";

// Дан массив с числами. Найдите сумму квадратов элементов этого массива.

let arr = [1, 2, 3, 4, 5];
let sum = 0;

for (let elem of arr) {
    sum += elem ** 2;
}

console.log(sum);

