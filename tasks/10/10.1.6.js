"use strict";

const button = document.getElementById("button1016");
const output = document.getElementById("output1016");

button.addEventListener("click", () => {
    output.classList.toggle("expanded");
})
