"use strict";

// Дано некоторое число, например, такое:
// 123789
// Удалите из этого числа все нечетные цифры. В нашем случае получится такой результат:
// 28

let numb = 123789;

numb = Number(String(numb).split("").reduce((acc, item) => {
    if (item % 2 === 0) {
        acc += item
    }
    return acc;
}, ""));

console.log(numb);