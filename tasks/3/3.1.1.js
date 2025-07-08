"use strict";

//Дано некоторое число. Проверьте, что цифры этого числа расположены по возрастанию.

let number = 123465;

let result = String(number).split("").reduce((acc, value, index, array) => {
    if (index < array.length && value >= array[index + 1]) {
        acc = true;
    }
    return acc;
}, false);

if (result) {
    console.log("Number digits are not arranged in ascending order");
} else {
    console.log("Number digits are arranged in ascending order");
}