"use strict";

let button = document.getElementById("button572");
let container = document.getElementById("container572");
let input = container.getElementsByTagName("li");

button.addEventListener("click", () => {
    for (let elem of input) {
        elem.textContent = +elem.textContent + 1;
    }
})