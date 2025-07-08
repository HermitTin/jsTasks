"use strict";

// Дан массив с числами.
// Подсчитайте количество отрицательных чисел в этом массиве.

let arr = [1, -2, -4, -5, -3, 6, 5];
let counter = 0;
for (let value of arr) {
    if (value < 0) {
        counter++;
    }
}

console.log(counter);