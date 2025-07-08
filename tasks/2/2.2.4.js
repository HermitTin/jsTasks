"use strict";

// Дан некоторый массив, например, вот такой:
// [1, 2, 3, 4, 5, 6]
// Поделите сумму первой половины элементов этого массива 
// на сумму второй половины элементов.

let arr = [1, 2, 3, 4, 5, 6];
let sumFirstHalf = 0;
let sumSecondHalf = 0;

for (let i = 0; i < arr.length; i++) {
    (i < arr.length/2) ? sumFirstHalf += arr[i] : sumSecondHalf += arr[i];
}

console.log(sumFirstHalf/sumSecondHalf);