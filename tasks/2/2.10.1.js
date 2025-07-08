"use strict";

// Дана строка с буквами и цифрами. 
// Проверьте, что в этой строке не более трех букв.

let str = "123?!DQde12";

let counter = str.split("").reduce((acc, elem) => {
    if (elem.toUpperCase() != elem || elem.toLowerCase() != elem) {
        acc++;
    }
    return acc;
}, 0);

if (counter < 3) {
    console.log("The string has less than 3 letters");
} else {
    console.log("The string has 3 or more letters");
}


