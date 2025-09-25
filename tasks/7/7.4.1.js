"use strict";


const output = document.getElementById("output741");

let currentDate = new Date();
let currentDay = currentDate.getDate();
let currentMounth = currentDate.getMonth();
let currentYear = currentDate.getFullYear();
let daysCount = (new Date(currentYear, currentMounth + 1, 1) - new Date(currentYear, currentMounth, 1)) / 86400000;

for (let i = 1; i <= daysCount; i++) {
    let listItem = document.createElement("li");
    let listItemDate = new Date(currentYear, currentMounth, i);
    listItem.textContent = listItemDate;
    if (listItemDate.getDay() == 0 || listItemDate.getDay() == 6) {
        listItem.style.color = "red";
    }
    if (listItemDate.getTime() === new Date (currentYear, currentMounth, currentDay).getTime()) {
        listItem.style.color = "green";
    }
    output.appendChild(listItem);
}