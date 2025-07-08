"use strict";

//Сделайте функцию, которая будет возвращать сумму N первых чисел Фибоначчи.

function fibonacciNUmbersSum(count) {
    let sum = 0;
    let number1 = 0;
    let number2 = 1;
    let nextNumber = 0;
    for (let i = 1; i < count; i++) {
        sum += number2;
        nextNumber = number1 + number2;
        number1 = number2;
        number2 = nextNumber;
        console.log(number1, number2);
    }
    return sum;
}

console.log(fibonacciNUmbersSum(20))