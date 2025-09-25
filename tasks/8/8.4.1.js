"use strict";

const button = document.getElementById("button841")
const output = document.getElementById("output841");


button.addEventListener("click", () => {
    output.classList.toggle("expanded");
})