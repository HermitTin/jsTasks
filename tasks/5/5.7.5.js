"use strict";

const button = document.getElementById("button575")
const input = document.getElementById("input575");
let output = document.getElementById("output575");

button.addEventListener("click", () => {
    const number = input.value;
    let sumFirstHalf = 0;
    let sumSecondHalf = 0;
    for (let i = 0; i < number.length; i++) {
        if (i < number.length / 2) {
            sumFirstHalf += +number[i];
        } else {
            sumSecondHalf += +number[i];
        }
    }

    if (sumFirstHalf > sumSecondHalf) {
        output.textContent = "First half is bigger than second";
    } else if (sumFirstHalf < sumSecondHalf) {
        output.textContent = "Second half is bigger than first";
    } else {
        output.textContent = "The halfs are equal";
    }
})