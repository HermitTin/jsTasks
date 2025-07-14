"use strict";

let output = document.getElementsByClassName("output5103");
const colors = ["red", "green", "blue", "yellow", "brown"];

document.addEventListener("click", (event) => {
    if (event.target.classList.contains("output5103")) {
        let color = Math.trunc(Math.random() * 6);
        event.target.style.color = colors[color];
    }
})