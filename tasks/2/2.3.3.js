"use strict";

// Даны числа, разделенные запятыми:
// '12,34,56'
// Найдите сумму этих чисел.

let str = '12,34,56';
let arr = str.split(",");
let sum = 0;
arr.forEach((item) => (sum += +item));
console.log(sum);

//or 

let sumSecond = arr.reduse((sumTemp, item) => (sumTemp += item, 0));
console.log(sumSecond);