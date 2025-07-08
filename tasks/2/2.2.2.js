"use strict";

// Дан массив с числами. Оставьте в нем только положительные числа.

let arr = [1, -2, -4, -5, -3, 6, 5];

for (let i = 0; i < arr.length; ) {
    (arr[i] > 0) ? i++ : arr.splice(i, 1);
}

console.log(arr);

