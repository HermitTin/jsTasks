"use strict";

// Дан массив с числами. Увеличьте каждое число из массива на 10 процентов.

let arr = [1, 2, 3, 4, 5];

arr.forEach((value, index, array) => array[index] = (value * 1.1).toFixed(1));

console.log(arr);