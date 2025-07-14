"use strict";


const button = document.getElementById("button591");
let output = document.getElementById("output591");
const arr = [1, 2, 3, 4, 5, 6];

button.addEventListener("click", () => {
    output.value = arr;
})