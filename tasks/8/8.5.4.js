"use strict";

const output = document.getElementById("output854");
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const select1 = output.children[0];
const select2 = output.children[1];
const select3 = output.children[2];
let currentDate = new Date();
let currentYear = +currentDate.getFullYear();
let currentMonth = +currentDate.getMonth();
let startYear = +currentYear - 10;
let endYear = +currentYear + 10;
for (let i = startYear; i <= endYear; i++) {
    let option = document.createElement("option");
    if (i === currentYear) {
        option.selected = true;
    }
    option.value = i;
    option.textContent = i;
    select3.appendChild(option);
}

for (let i = 0; i < months.length; i++) {
    let option = document.createElement("option");
    if (i === currentMonth) {
        option.selected = true;
    }
    option.value = i;
    option.textContent = months[i];
    select2.appendChild(option);
}

fillDaysSelect(currentYear, currentMonth);

function fillDaysSelect (year, month) {
    let daysCount = Math.abs((new Date(year, month, 1) - new Date(year, month + 1, 1)) / 86400000);
    for (let i = 1; i <= daysCount; i++) {
        let option = document.createElement("option");
        if (i === currentDate.getDate() && month === currentMonth) {
            option.selected = true;
        }
        option.value = i;
        option.textContent = i;
        select1.appendChild(option);
    }   
}

select2.addEventListener("change", () => {
    select1.innerHTML = "";
    fillDaysSelect(+select3.value, +select2.value);
})