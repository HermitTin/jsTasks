"use strict";

//Сделайте функцию, которая заполнит массив N случайными числами из заданного промежутка.

function randomArrayFill(min, max, count) {
    let arr = [];
    for (let i = 0; i < count; i++) {
        let value = Math.floor(min + Math.random() * (max + 1 - min));
        arr.push(value);
    }
    return arr;
}

console.log(randomArrayFill(5, 10, 100));