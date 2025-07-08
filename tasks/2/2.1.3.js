"use strict";

// Дан массив. Удалите из него элементы с заданным значением.

let arr = [0, 1, 2, 0, 0, 3, 4];
let key = 0;

for (let i = 0; i < arr.length; ) {
    (arr[i] == key) ? arr.splice(i, 1) : i++;
}

console.log(arr);