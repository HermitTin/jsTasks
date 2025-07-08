"use strict";

// Дана некоторая строка:
// 'abcde abcde abcde'
// Замените в ней первый символ каждого слова на '!':
// '!bcde !bcde !bcde'

let str = 'abcde abcde abcde';

str = str.split(" ").map((value) => {
    value = "!" + value.slice(1);
    return value;
}).join(" ");

console.log(str);