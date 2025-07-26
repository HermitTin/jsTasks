"use strict";

let output = document.getElementById("output652");
let input = document.getElementById("input652");


document.addEventListener("input", (event) => {
    let parent = event.target.closest("#input652");
    if (parent) {
        let numbers = input.value.split(",");
        let sum = 0;
        for (let number of numbers) {
            sum += +number;
        }
        output.textContent = sum;
    }
})


//input