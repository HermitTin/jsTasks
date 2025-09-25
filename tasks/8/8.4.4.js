"use strict";

const output = document.getElementById("output844");

for (let i = 1; i < 10; i++) {
    output.textContent += String(i).repeat(i) + "\n";
}