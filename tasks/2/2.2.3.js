"use strict";

// Дана строка. Удалите предпоследний символ из этой строки.

let str = "qwerty";
str = str.slice(0, -2) + str.at(-1);
console.log(str);