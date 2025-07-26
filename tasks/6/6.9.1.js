"use strict";

let output = document.getElementById("output691");
const button = document.getElementById("button691");
const taskArray = ["red", "green", "blue", "yellow", "brown"];
let nextColor = 0;

button.addEventListener("click", () => {
    output.style.color = taskArray[nextColor];
    nextColor++;
    if (nextColor >= taskArray.length) {
        nextColor = 0;
    }
})

