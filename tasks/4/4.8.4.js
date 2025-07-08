"use strict";

//Сделайте функцию, которая будет возвращать массив простых чисел из заданного промежутка.

function simpleNumbersFromLimit(min, max) {
    let arr = []
    outer: for (let i = min; i <= max; i++) {
        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                continue outer;
            }
        }
        arr.push(i);
    }
    return arr;
}

console.log(simpleNumbersFromLimit(3, 13));