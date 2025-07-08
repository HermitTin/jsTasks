"use strict";

// Дана некоторая строка, например, вот такая:
// '023m0df0dfg0'
// Получите массив позиций всех нулей в этой в строке.

let str = '023m0df0dfg0';
let arrPosition = [];
for (let i = 0; i < str.length; i++) {
    if (str[i] === '0') {
        arrPosition.push(i)
    }
}

console.log(arrPosition);

//or

arrPosition = [];
str.split('').forEach((value, index) => {
    if (value === '0') arrPosition.push(index);    
})

console.log(arrPosition);