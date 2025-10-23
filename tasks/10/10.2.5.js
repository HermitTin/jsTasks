"use strict";

const output = document.getElementById("output1025");
const button = document.getElementById("button1025");
const tData = output.children[0];

button.addEventListener("click", () => {
    let rowsCount = tData.children.length;
    for (let i = 0; i < rowsCount; i++) {
        for (let cell of tData.children[i].children) {
            if (cell.cellIndex < (rowsCount - i)) {
                cell.textContent = "+";
            }
        }
    }
})