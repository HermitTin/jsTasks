"use strict";

let input = document.getElementsByClassName("input655")
let output = document.getElementById("output655");
const button = document.getElementById("button655");

button.addEventListener("click", () => {
    let listFirst = input[0].value.split(",");
    let listSecond = input[1].value.split(",");
    let commonNumbers = [];
    for (let number of listFirst) {
        if (listSecond.includes(number)) {
            commonNumbers.push(number);
        }
    }
    output.textContent = commonNumbers;
})