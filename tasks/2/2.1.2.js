"use strict";

// Выведите в консоль все числа в промежутке от 1 до 1000, 
// сумма первой и второй цифры которых равна пяти.

for (let i = 1; i <= 1000; i++) {
    let sum = +String(i)[0] + +String(i)[1];
    if (sum == 5) {
        console.log(i);
    }
}