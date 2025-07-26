"use strict";

const button = document.getElementById("button615")
let output = document.getElementById("output615");

button.addEventListener("click", () => {
    if (output.children[0]) {
        let elementNumber = output.children.length - 1;
        output.children[elementNumber].remove();
    }
})