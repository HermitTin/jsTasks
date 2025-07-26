"use strict";

let output = document.getElementById("output661");
let input = document.getElementById("input661");
const button = document.getElementById("button661");
let taskArrayArea = document.getElementById("taskArray661");
const taskArray = [1, 2, 3, 4, 5, 6, 7];
taskArrayArea.textContent = taskArray;

button.addEventListener("click", () => {
    output.textContent = taskArray[+input.value];
})

