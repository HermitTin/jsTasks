"use strict";

const output = document.getElementById("output874");

for (let i = 9; i > 0; i--) {
    output.textContent += String(i).repeat(i) + "\n";
}