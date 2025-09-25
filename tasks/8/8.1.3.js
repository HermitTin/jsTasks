"use strict";

const output = document.getElementById("output813");

let srcStr = "xxxxx";
let arr = [];

for (let i = 1; i <= 5; i++) {
    arr.push(srcStr.slice(0, i));
}

for (let item of arr) {
    output.textContent += item + "\n"
}