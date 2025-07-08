"use strict";

// Дана строка. Проверьте, что эта строка состоит только из цифр.

let str = "124asd213";

if (isNaN(+str)) {
    console.log("string contains not only digits");
} else {
    console.log("string contains only digits")
}