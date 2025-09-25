"use strict";

const output = document.getElementById("output855");

for (let i = 1; i < 10; i += 2) {
    output.textContent += String(i).repeat(i) + "\n";
}