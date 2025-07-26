"use strict";

let inputs = document.getElementsByClassName("input692");
let output = document.getElementById("output692");
const button = document.getElementById("button692");

button.addEventListener("click", () => {
    let firstDate = new Date(inputs[0].value);
    let secondDate = new Date(inputs[1].value);
    let difference = Math.trunc(Math.abs(firstDate.getTime() - secondDate.getTime()) / 86400000);
    output.textContent = difference;
})

