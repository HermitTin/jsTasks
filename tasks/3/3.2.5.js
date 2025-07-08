"use strict";

// Дан массив:
// [
// 	[1, 2, 3],
// 	[4, 5, 6],
// 	[7, 8, 9],
// ]
// Найдите сумму элементов этого массива.

let arr = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
]

let sum = arr.join(",").split(",").reduce((acc, value) => {
    acc += +value;
    return acc;
}, 0);

console.log(sum);