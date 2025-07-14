"use strict";


let button = document.getElementById("button561");
let input = document.getElementById("input561");
let output = document.getElementById("output561");

button.addEventListener("click", () => {
    if (+input.value % 4 === 0) {
        output.textContent = "The year is leap";
    } else {
        output.textContent = "The year is not leap";
    }
})
