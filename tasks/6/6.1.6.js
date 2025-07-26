"use strict";

const button = document.getElementById("button616")
let output = document.getElementById("output616");

button.addEventListener("click", () => {
    if (output.children[0]) {
        let elementNumber = Math.trunc(Math.random() * (output.children.length - 1));
        output.children[elementNumber].remove();
    }
})