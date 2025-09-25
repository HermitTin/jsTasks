"use strict";

const output = document.getElementById("output772")

let srcStr = "12345";
let arr = [];
for (let i = 1; i <= 5; i++) {
    arr.push(srcStr.slice(0, i))
}

for (let item of arr) {
    output.textContent += item + "\n";
}