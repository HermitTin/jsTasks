"use strict";

let output = document.getElementById("output671");
let input = document.getElementById("input671");
const button = document.getElementById("button671");
printDate();

button.addEventListener("click", printDate);

function printDate() {
    output.innerHTML = "";
    let year = +input.value;
    let yearDaysCount = 365;
    if (year % 4 === 0) {
        yearDaysCount = 366;
    }

    for (let i = 1; i <= yearDaysCount; i++) {
        let date = new Date(year, 0, i);
        if (date.getDay() === 0 || date.getDay() === 6) {
            let listItem = document.createElement("li");
            listItem.textContent = date;
            output.appendChild(listItem);
        }
    }
}
