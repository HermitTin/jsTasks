"use strict";

//Сделайте функцию, которая параметрами будет принимать два числа и возвращать массив, 
// заполненный целыми числами от минимального параметра до максимального.

function randomArrayFill(min, max) {
    let arr = [];
    for (let i = 0; i < 10; i++) {
        let value = Math.floor(min + Math.random() * (max + 1 - min));
        arr.push(value);
    }
    return arr;
}

console.log(randomArrayFill(5, 10));