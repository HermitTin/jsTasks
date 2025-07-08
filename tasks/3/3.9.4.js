"use strict";

// Найдите все числа от 1 до 1000, сумма цифр которых равна 13.

for (let i = 1; i <= 1000; i++) {
    let sum = 0;
    sum = String(i).split("").reduce((acc, value) => {
        acc += +value;
        return acc;
    }, 0);

    if (sum === 13) {
        console.log(i);
    }
}