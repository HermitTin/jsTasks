"use strict";

// Выведите в консоль все числа в промежутке от 10 до 1000, у которых первая цифра четная.

let digitsNumber = 10;
for (let i = 10; i <= 1000; i++) {
    if (i / digitsNumber >= 10) {
        digitsNumber *= 10;
    }

    if (Math.trunc(i / digitsNumber) % 2 === 0) {
        console.log(i);
    }
}