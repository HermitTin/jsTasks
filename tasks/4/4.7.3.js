"use strict";

//Сделайте функцию, которая будет возвращать случайное число. 
// Функция не должна возвращать одно и тоже число два раза подряд.

function randomSingleNumber(min, max) {
    let number = Math.trunc(min + Math.random() * (max + 1 - min));
    if (lastNumber != number) {
        lastNumber = number;
    } else {
        number = randomSingleNumber(min, max);
    }
    return number;
}

let lastNumber = 0;
console.log(randomSingleNumber(1, 3))
console.log(randomSingleNumber(1, 3))
console.log(randomSingleNumber(1, 3))
console.log(randomSingleNumber(1, 3))
console.log(randomSingleNumber(1, 3))
console.log(randomSingleNumber(1, 3))