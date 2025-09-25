"use strict";

const output = document.getElementById("output833");
let arr = [];

for (let i = 1; i <= 9; i++) {
    arr.push("" + i + i + i);
}

for (let item of arr) {
    output.textContent += item + "\n";
}