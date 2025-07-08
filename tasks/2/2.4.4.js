"use strict";

// Дана некоторая строка:
// 'abcde'
// Переведите в верхний регистр все нечетные буквы этой строки.
// В нашем случае должно получится следующее:
// 'AbCdE'

let str = 'abcde';
let arr = str.split('');

for (let i = 0; i < str.length; i += 2) {
    arr[i] = arr[i].toUpperCase();
}
str = arr.join('');

console.log(str);

//or 

str = 'abcde';
str = str.split('').map((value, index) => {
    if (index % 2 == 0) {
        return value.toUpperCase();
    }
    return value;
}).join("");
console.log(str);