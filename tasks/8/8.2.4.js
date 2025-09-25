"use strict";

const output = document.getElementById("output824");
const srcStr = "xxxxxxxxxx";
let arr = [];

for (let i = 2; i <= 10; i += 2) {
    arr.push(srcStr.slice(0, i));
}

for (let item of arr) {
    output.textContent += item + "\n";
}