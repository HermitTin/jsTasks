"use strict";

// Дан массив с числами. Найдите сумму положительных элементов этого массива.

let arr = [1, -2, 3, -4, 5];
let sum = 0;

for (let elem of arr) {
    if (elem > 0) {
        sum += elem;
    }
}

console.log(sum);
