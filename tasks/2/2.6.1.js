"use strict";

// Дана некоторая строка с буквами и цифрами. 
// Получите массив позиций всех цифр из этой строки.

let str = 'sde12dsd12e21ds1';

let positions = [];
str.split('').forEach((character, index) => {
    if (isFinite(character)) {
        positions.push(index);
    }
})

console.log(positions);

