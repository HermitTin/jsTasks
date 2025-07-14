"use strict";

const button = document.getElementById("button585")
let input = document.getElementById("input585");
let output = document.getElementById("output585");

button.addEventListener("click", () => {
    let message;
    let values = input.value.split(",");
    if (values.includes("13")) {
        message = "The numbers includes 13";
    } else {
        message = "The numbers don't includes 13";
    }
    output.textContent = message;
})