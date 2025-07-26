"use strict";

let input = document.getElementById("input674");
let output = document.getElementById("output674");
const button = document.getElementById("button674");

button.addEventListener("click", () => {
    let zeroAmount = input.value;
    let outString = "";
    for (let i = 0; i < zeroAmount; i++) {
        outString += "0";
    }
    output.textContent = outString;
})

