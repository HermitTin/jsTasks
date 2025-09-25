"use strict";

const output = document.getElementById("output7102")

let str = "";
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        str += String(i) + j + " ";
    }
}

output.textContent = str;