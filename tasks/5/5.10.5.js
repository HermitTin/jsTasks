"use strict";

let button = document.getElementById("button5105");
let output = document.getElementById("output5105");

button.addEventListener("click", () => {
    let currentDate = new Date();
    let nextYear = currentDate.getFullYear() + 1;
    let newYear = new Date(nextYear, 0 , 1);
    output.textContent = Math.trunc((newYear - currentDate)/86400000);
})