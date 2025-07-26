"use strict";

let output = document.getElementById("output662");
const button = document.getElementById("button662");
const colorArray = ["red", "green", "blue", "yellow", "brown"];

button.addEventListener("click", () => {
    let index = Math.trunc(Math.random() * 5);
    output.style.color = colorArray[index];
})

