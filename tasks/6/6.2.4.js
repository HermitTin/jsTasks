"use strict";

const button = document.getElementById("button624")
let output = document.getElementById("output624");
const srcArray = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
];

button.addEventListener("click", () => {
    let rows = srcArray.length;;
    let columnsLengths = [];
    for (let i = 0; i < srcArray.length; i++) {
        columnsLengths.push(srcArray[i].length);
    }
    let maxColumns = Math.max(...columnsLengths);
    let table = document.createElement("table");
    output.appendChild(table);
    for (let i = 0; i < rows; i++) {
        let row = document.createElement("tr");
        table.appendChild(row);
        for (let j = 0; j < maxColumns; j++) {
            let td = document.createElement("td");
            td.textContent = srcArray[i][j];
            row.appendChild(td);
        }
    }

})