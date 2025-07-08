"use strict";

//Сделайте функцию, которая заполнит массив случайными латинскими буквами.

function randomArrayFill(count) {
    let arr = [];
    for (let i = 0; i < count; i++) {
        let value = Math.floor(97 + Math.random() * (123 - 97));
        arr.push(String.fromCodePoint(value));
    }
    return arr;
}

console.log(randomArrayFill(20));