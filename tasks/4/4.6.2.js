"use strict";

//Сделайте функцию, которая сгенерирует строку заданной длины,
//  заполненную случайными латинскими буквами.

function randomArrayFill(count) {
    let str = '';
    for (let i = 0; i < count; i++) {
        let value = Math.floor(97 + Math.random() * (123 - 97));
        str += String.fromCodePoint(value);
    }
    return str;
}

console.log(randomArrayFill(20));