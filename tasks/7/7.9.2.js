"use strict";

const output = document.getElementById("output792");

let str = "-";
for (let i = 1; i <= 45; i += 11) {
    str += i + "-";
}
output.textContent = str;
