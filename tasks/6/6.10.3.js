"use strict";

let outputContainer = document.getElementById("output6103")

let table = document.createElement("table");
outputContainer.appendChild(table);
for (let i = 0; i <= 10; i++) {
    let row = document.createElement("tr");
    table.appendChild(row);
    for (let j = 0; j <= 10; j++) {
        let cell = document.createElement("td");
        row.appendChild(cell);
        if (i == 0) {
            cell.classList.add("numberCell");
            cell.textContent = j;
            continue;
        }

        if (j == 0) {
            cell.classList.add("numberCell");
            cell.textContent = i;
            continue;
        }
        
        cell.textContent = i * j;

    }
}

