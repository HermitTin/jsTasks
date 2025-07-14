"use strict";

let button = document.getElementById("button562");
let output = document.getElementById("output562");
button.addEventListener("click", () => {
    let num = Math.trunc(1 + Math.random() * 100);
    output.value = num;
})