"use strict";

const button = document.getElementById("button622")
let output = document.getElementById("output622");

button.addEventListener("click", () => {
    let rows = document.getElementById("input622_1").value;
    let columns = document.getElementById("input622_2").value;
    let table = document.createElement("table");
    let counter = 1;
    output.appendChild(table);
    for (let i = 0; i < rows; i++) {
        let row = document.createElement("tr");
        table.appendChild(row);
        for (let j = 0; j < columns; j++) {
            let td = document.createElement("td");
            td.textContent = counter;
            counter++;
            row.appendChild(td);
        }
    }

})