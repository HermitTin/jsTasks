"use strict";

const button = document.getElementById("button621")
let output = document.getElementById("output621");

button.addEventListener("click", () => {
    let rows = document.getElementById("input621_1").value;
    let columns = document.getElementById("input621_2").value;
    let table = document.createElement("table");
    output.appendChild(table);
    for (let i = 0; i < rows; i++) {
        let row = document.createElement("tr");
        table.appendChild(row);
        for (let j = 0; j < columns; j++) {
            let td = document.createElement("td");
            row.appendChild(td);
        }
    }

})