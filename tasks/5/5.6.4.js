"use strict";

let button = document.getElementById("button564");
let output = document.getElementById("output564");

button.addEventListener("click", () => {
    output.style.width = String(+parseInt(output.style.width) * 2) + "px";
    output.style.height = String(+parseInt(output.style.height) * 2) + "px";
})