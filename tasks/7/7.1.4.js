"use strict";

const button = document.getElementById("button714");
const output = document.getElementById("output714");
const input = document.getElementById("input714");
const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

button.addEventListener("click", () => {
    let birthDate = new Date(input.value);
    let birthYear = birthDate.getFullYear();
    let birthMonth = birthDate.getMonth();
    let birthDay = birthDate.getDate();
    let currentYear = new Date().getFullYear();
    for (let i = birthYear; i <= currentYear; i++) {
        let row = document.createElement("tr");
        output.appendChild(row);
        let cellFirst = document.createElement("td");
        cellFirst.textContent = String(i) + "-" + birthMonth + "-" + birthDay;
        row.appendChild(cellFirst);
        let cellSecond = document.createElement("td");
        cellSecond.textContent = weekDays[new Date(i, birthMonth, birthDay).getDay()];
        row.appendChild(cellSecond);
    }
})