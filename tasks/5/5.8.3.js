"use strict";

let input = document.getElementById("input583");
let output = document.getElementById("output583");

input.addEventListener("focusout", () => {
    let sum = input.value.split(",").reduce((acc, value) => {
        acc += +value;
        return acc;
    }, 0)
    output.textContent = sum;
})