"use strict";

let button = document.getElementById("button584")
let inputFirst = document.getElementById("input584_1");
let inputSecond = document.getElementById("input584_2");
let output = document.getElementById("output584")

button.addEventListener("click", () => {
    let numberFirst = inputFirst.value;
    let numberSecond = inputSecond.value;
    let divisors = [];
    for (let i = 0; i <= Math.min(numberFirst, numberSecond); i++) {
        if (numberFirst % i === 0 && numberSecond % i === 0) {
            divisors.push(i);
        }
    }
    output.textContent = divisors;
})