"use strict";

const button = document.getElementById("button861");
const output = document.getElementById("output861");
const colors = ["red", "blue", "cyan", "yellow", "green", "magenta"];

output.innerHTML = output.textContent.split("").map((character) => {
    character = "<span>" + character + "</span>";
    return character;
}).join("");

button.addEventListener("click", () => {
    for (let i = 0; i < output.children.length; i++) {
        let character = output.children[i];
        let colorNumber = colorRandom(i);
        character.style.color = colors[colorNumber];
    }
})

function colorRandom(i) {
    let colorNumber = Math.trunc(Math.random() * 6);
    if (i != 0 && output.children[i - 1].style.color === colors[colorNumber]) {
        colorNumber = colorRandom(i);
    }
    return colorNumber;
}