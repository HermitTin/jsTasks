"use strict";

// Даны два массива:
// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// Слейте эти массивы в новый массив:
// [1, 2, 3, 4, 5, 6]

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

let arrUnion = [];
arrUnion = arrUnion.concat(arr1, arr2);
console.log(arrUnion);