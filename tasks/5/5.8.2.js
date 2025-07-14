"use strict";

const button = document.getElementById("button582");
let output = document.getElementById("output582");
const arr = [1, 2, 3, 4, 5, 6];
let paragraph = document.getElementById("array582");
paragraph.textContent = `the array is [${arr}]`;

button.addEventListener("click", () => {
    let number = Math.trunc(Math.random() * arr.length);
    output.value = arr[number];
})