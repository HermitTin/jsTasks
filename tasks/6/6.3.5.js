"use strict";

let input = document.getElementById("input635")
let output = document.getElementById("output635");

document.addEventListener("focusout", (event) => {
    if (event.target.id === "input635") {
        let targetValue = input.value;
        let currentTimestamp = new Date();
        const year = currentTimestamp.getFullYear();
        const currentDate = new Date(currentTimestamp.getFullYear(), currentTimestamp.getMonth(), currentTimestamp.getDate()).getTime();
        let [mounth, day] = targetValue.split(".");
        const targetDate = new Date(year, +mounth - 1, +day).getTime();
        if (targetDate > currentDate) {
            output.textContent = "the date has not arrived yet"
        }
        if (targetDate < currentDate) {
            output.textContent = "the date is arrived already"
        }
        if (targetDate == currentDate) {
            output.textContent = "the date is today"
        }
    }
    
})