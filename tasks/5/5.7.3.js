"use strict";

let button = document.getElementById("button573");
let input = document.getElementById("input573");
let output = document.getElementById("output573");

button.addEventListener("click", () => {
    let number = +input.value;
    let arr = [];
    for (let i = 1; i <= number; i++) {
        if (number % i === 0) {
            arr.push(i);
        }
    }
    output.textContent = arr;
})