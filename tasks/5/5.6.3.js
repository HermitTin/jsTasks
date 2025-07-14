"use strict";

let button = document.getElementById("button563");
let input = document.getElementById("input563");
let output = document.getElementById("output563");

button.addEventListener("click", () => {
    let date = new Date(input.value);
    let days = ["Sunday", "Monday", "Tuesdey", "Wednesday", "Thursday", "Friday", "Saturday"]
    output.textContent = days[date.getDay()];
})