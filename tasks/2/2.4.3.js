"use strict";

// Дано число. Выведите в консоль количество четных цифр в этом числе.

let number = 123456;
let count = 0;

for (let numb of String(number)) {
    if (+numb % 2 == 0 && +numb != 0) count++;
}

console.log(count);

//or

count = String(number).split('').reduce((count, value) => {
    if (+value % 2 == 0 && +value != 0) count++;
    return count;
}, 0);

console.log(count);