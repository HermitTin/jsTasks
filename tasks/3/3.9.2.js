"use strict";

// Дана строка. Проверьте, что эта строка состоит только из четных цифр.

let str = "2468";

let result = str.split("").reduce((acc, value) => {
    if (+value % 2 != 0) {
        acc = false;
    }
}, true);

if (result) {
    console.log("The string contains even digits only");
} else {
    console.log("The string contains not only even digits");
}