"use strict";

// Дано некоторое число:
// 1357
// Проверьте, что все цифры этого числа являются нечетными.

let numb = 1357;
let isEven = String(numb).split("").reduce((acc, value) => {
    if (value % 2 == 0) {
        acc = true;
    }
    return acc;
}, false);

if (isEven) {
    console.log("Not all digits in number are odd");
} else {
    console.log("All digits in number are odd");
}
