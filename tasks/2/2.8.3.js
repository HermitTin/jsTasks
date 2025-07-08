"use strict";

// Даны два массива:
// let arr1 = [1, 2, 3];
// let arr2 = ['a', 'b', 'c'];
// Слейте эти массивы в новый массив следующим образом:
// [1, 2, 'a', 'b', 'c', 3]

let arr1 = [1, 2, 3];
let arr2 = ['a', 'b', 'c'];

let arr3 = arr1.slice(0, arr1.length / 2 + 1).concat(arr2, arr1.slice(arr1.length / 2 + 1));

console.log(arr3);