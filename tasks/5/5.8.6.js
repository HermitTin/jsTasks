"use strict";


const button = document.getElementById("button586");
let input = document.getElementById("input586");
let output = document.getElementById("output586");

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

    if (sumFirstHalf === sumSecondHalf) {
        output.textContent = "The halfs digits sums are equal";
    } else {
        output.textContent = "The halfs digits sums are not equal";
    }
})
