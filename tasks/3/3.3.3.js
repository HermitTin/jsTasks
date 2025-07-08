"use strict";

// Дано некоторое слово:
// 'abcba'
// Проверьте, что это слово читается одинаково с любой стороны.

let str = 'abcba';
let strReverse = str.split("").reverse().join("");

if (str === strReverse) {
    console.log("The world and it's reverse are the same");
} else {
    console.log("The world and it's reverse are NOT the same")
}