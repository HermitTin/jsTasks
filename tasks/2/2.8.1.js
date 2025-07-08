"use strict";

// Дана строка с буквами. Проверьте, что в этой строке не более двух заглавных букв.

let str = "cQxCc";
let counter = 0;

for (let elem of str) {
    if (elem.toUpperCase() === elem) {
        counter++;
    }
}

if (counter > 2) {
    console.log("There is more than 2 Uppercase characters in a row");
} else {
    console.log("There is less than 2 Uppercase characters in a row");
}