"use strict";

// Сформируйте с помощью циклов следующий массив:
// [
// 	[1, 2, 3],
// 	[4, 5, 6],
// 	[7, 8, 9],
// ]
let arr = [];
let item = 1;

for (let i = 0; i < 3 ; i++) {
	arr.push([]);
    for (let j = 0; j < 3; j++) {
        arr[i].push(item);
        item++;
    }
}

console.log(arr);