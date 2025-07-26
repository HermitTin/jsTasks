"use strict";

const output = document.getElementById("output6102");
const button = document.getElementById("button6102");

button.addEventListener("click", () => {
    let cells = output.getElementsByTagName("TD");
    for (let i = 0; i < cells.length; i++) {
        if (i % 2 == 0) {
            cells[i].style.backgroundColor = "black";
        } else {
            cells[i].style.backgroundColor = "white";
        }
    }
})

