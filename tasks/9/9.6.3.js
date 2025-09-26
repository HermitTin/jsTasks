"use strict";

const output = document.getElementById("output963");

document.addEventListener("click", (event) => {
    if (event.target.tagName === "TD") {
        let tdata = output.children[0];
        let targetCell = event.target;
        let rowCount = 0;
        for (let row of tdata.children) {
            let columnCount = 0;
            rowCount++;
            for (let cell of row.children) {
                columnCount++;
                if (cell == targetCell) {
                    targetCell.textContent = rowCount + ", " + columnCount;
                }
            }
        }

    }
})
