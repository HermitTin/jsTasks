"use strict";

const output = document.getElementById("output892");
const button = document.getElementById("button892");
const colors = ["red", "blue", "cyan", "yellow", "green", "magenta"];

button.addEventListener("click", () => {
    for (let item of output.children) {
        let colorNumber = Math.trunc(Math.random() * colors.length);
        item.style.color = colors[colorNumber];
    }
})

