"use strict";

const button = document.getElementById("button946");
const output = document.getElementById("output946");

button.addEventListener("click", () => {
    let tdata = output.children[0];
outer:for (let row of tdata.children) {
        for (let cell of row.children) {
            if (cell.style.backgroundColor != "red") {
                cell.style.backgroundColor = "red";
                break outer;
            }
        }
    }
})