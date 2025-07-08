"use strict";

// Дан массив. Удалите из него каждый пятый элемент.

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

for (let i = 4; i < arr.length; i += 4) {
    arr.splice(i, 1);
}

console.log(arr);