"use strict";

// Дано число, например, вот такое:
// let num = 12345;
// Проверьте, что все цифры этого числа больше нуля.

let num = 12345;

let result = String(num).split("").reduce((acc, value) => {
    if (+value <= 0) {
        acc = false;
    }
    return acc;
}, true);

if (result) {
    console.log("All digits in number are bigger than zero");
} else {
    console.log("Not all digits in number are bigger than zero");
}