"use strict";

const output = document.getElementById("output962");

document.addEventListener("click", (event) => {
    if (event.target.tagName === "TD") {
        let tdata = output.children[0];
        let targetCell = event.target;
        let count = 0;
        for (let row of tdata.children) {
            for (let cell of row.children) {
                count++;
                if (cell == targetCell) {
                    targetCell.textContent = count;
                }
            }
        }

    }
})
