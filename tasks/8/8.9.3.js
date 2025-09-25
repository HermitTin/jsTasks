"use strict";

const button = document.getElementById("button893");
const output = document.getElementById("output893");
const closeButton = document.getElementById("closeButton");

document.addEventListener("click", (event) => {
    if ((event.target.id != "output893" || event.target.id === "closeButton") && event.target.id != "button893") {
        output.classList.add("hide");
    }

    if (event.target.id === "button893") {
        output.classList.remove("hide");
    }
})