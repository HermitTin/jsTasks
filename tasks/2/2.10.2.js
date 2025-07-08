"use strict";

// Дано число. Получите первую четную цифру с конца этого числа.

let num = 1234567;

let evenDigit = +String(num).split("").reduce((acc, value) => {
    if (value % 2 == 0) {
        acc = value;
    }
    return acc;
}, 0);

console.log(evenDigit);