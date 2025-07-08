"use strict";

// Напишите программу, которая сформирует следующую строку:
// '-1-2-3-4-5-'

let str = "";

for (let i = 1; i <= 5; i++) {
    str += String(-i);
    if (i == 5) {
        str += '-'
    }
}

console.log(str);