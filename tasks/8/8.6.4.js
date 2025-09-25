"use strict";

const output = document.getElementById("output864");
const srcStr = "xxxxx";
for (let i = 5; i > 0; i--) {
    output.textContent += srcStr.slice(0, i) + "\n";
}