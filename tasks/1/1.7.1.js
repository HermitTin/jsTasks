"use strict";

// Дана строка:
// 'abcde'
// Получите массив букв этой строки.

let string = 'abcde'
let arr = [];

for (let char of string) {
    arr.push(char);
}

console.log(arr);
