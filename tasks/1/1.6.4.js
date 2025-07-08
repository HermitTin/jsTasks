"use strict";

// Дан массив с числами. Найдите сумму тех элементов этого массива, 
// которые больше нуля и меньше десяти.

let arr = [1, -4, 7, -10, 13];
let sum = 0;

for (let elem of arr) {
    if (elem > 0 && elem <10) {
        sum += elem;
    }
}

console.log(sum);