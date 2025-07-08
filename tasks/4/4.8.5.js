"use strict";

//Сделайте функцию, которая параметрами будет принимать любое количество чисел, а возвращать их сумму.

function numbersSum(...numbers) {
    let sum = numbers.reduce((acc, value) => {
        acc += value;
        return acc;
    }, 0);
    return sum;
}

console.log(numbersSum(1, 2, 3, 4, 5));
console.log(numbersSum(1, 2, 3, 4, 5, 6, 7));
console.log(numbersSum(4, 5, 6, 7));