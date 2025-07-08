"use strict";

// Дан массив с дробями:
// [1.456, 2.125, 3.32, 4.1, 5.34]
// Округлите эти дроби до одного знака в дробной части.

let arr = [1.456, 2.125, 3.32, 4.1, 5.34];
arr.forEach((item, index, array) => {array[index] = +item.toFixed(1)});
console.log(arr);

//or 

arr = [1.456, 2.125, 3.32, 4.1, 5.34];

let arrRounded = arr.map(item => +item.toFixed(1));
console.log(arrRounded);