"use strict";

const input = document.getElementById("input953");
const output = document.getElementById("output953");
const button = document.getElementById("button953");
const srcArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

button.addEventListener("click", () => {
    output.innerHTML = "";
    let columns = input.value;
    let cells = 0;
outer: while (true) {
        let row = document.createElement("tr");
        output.appendChild(row);
        for (let i = 0; i < columns; i++) {
            let content = srcArr[cells];
            if (content) {
                let cell = document.createElement("td");
                cell.textContent = content;
                row.appendChild(cell);
                cells++;
            } else {
                break outer;
            }
        }
    }
})
