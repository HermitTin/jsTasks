"use strict";

const button = document.getElementById("button623")
let output = document.getElementById("output623");

button.addEventListener("click", () => {
    let rows = document.getElementById("input623_1").value;
    let columns = document.getElementById("input623_2").value;
    let table = document.createElement("table");
    output.appendChild(table);
    for (let i = 0; i < rows; i++) {
        let row = document.createElement("tr");
        table.appendChild(row);
        for (let j = 0; j < columns; j++) {
            let td = document.createElement("td");
            td.textContent = `${i + 1}.${j + 1}`
            row.appendChild(td);
        }
    }

})