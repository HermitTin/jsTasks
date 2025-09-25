"use strict";

const output = document.getElementById("output852");
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const select1 = output.children[0];
const select2 = output.children[1];
const select3 = output.children[2];
let currentDate = new Date();
let currentYear = currentDate.getFullYear();
let startYear = +currentYear - 10;
let endYear = +currentYear + 10;
for (let i = startYear; i <= endYear; i++) {
    let option = document.createElement("option");
    option.value = i;
    option.textContent = i;
    select3.appendChild(option);
}

for (let month of months) {
    let option = document.createElement("option");
    option.value = month;
    option.textContent = month;
    select2.appendChild(option);
}

let daysCount = Math.abs((new Date(currentYear, 0, 1) - new Date(currentYear, 1, 1)) / 86400000);
for (let i = 1; i <= daysCount; i++) {
    let option = document.createElement("option");
    option.value = i;
    option.textContent = i;
    select1.appendChild(option);
}