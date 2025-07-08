"use strict";

// Дана некоторая строка:
// 'a bc def ghij'
// Переведите в верхний регистр все подстроки, в которых количество букв меньше или равно трем. 
// В нашем случае должно получится следующее:
// 'A BC DEF ghij'

let str = 'a bc def ghij';

str = str.split(" ").map((item) => {
    if (item.length <= 3) {
        item = item.toUpperCase();
    }
    return item;
}).join(" ");

console.log(str);