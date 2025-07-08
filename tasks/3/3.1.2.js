"use strict";

// Дан массив:
// [1, '', 2, 3, '', 5]
// Удалите из массива все пустые строки.

let arr = [1, '', 2, 3, '', 5];

arr = arr.join("").split("").map((value) => {  //map for converting values back to number
    value = +value;
    return value;
});

console.log(arr);