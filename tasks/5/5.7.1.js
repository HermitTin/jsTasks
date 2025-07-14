"use strict";


let button = document.getElementById("button571");
let container = document.getElementById("container571");
let input = container.getElementsByTagName("li");
let output = document.getElementById("output571");

button.addEventListener("click", () => {
    let sum = 0;
    for (let elem of input) {
        sum += +elem.textContent;
    }
    output.value = sum;
})
