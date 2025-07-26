"use strict";

let output = document.getElementById("output672");
const button = document.getElementById("button672");

button.addEventListener("click", () => {
    let currentDate = new Date;
    let currentMonth = currentDate.getMonth();
    let currentYear = currentDate.getFullYear();
    let targetDate = new Date(currentYear, currentMonth + 1, 0);
    output.textContent = targetDate;
})

