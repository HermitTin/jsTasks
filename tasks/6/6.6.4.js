"use strict";

let input = document.getElementById("input664");
let output = document.getElementById("output664");

document.addEventListener("keydown", (event) => {
    if (event.shiftKey) {
        if (event.key === "Enter") {
            output.textContent += input.value;
        }
        
    }
})

