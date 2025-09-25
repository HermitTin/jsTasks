"use strict";

const output = document.getElementById("output873");

document.addEventListener("click", (event) => {
    if (event.target.classList.contains("shuffledDiv")) {
        output.appendChild(event.target);
    }
})
