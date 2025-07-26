"use strict";

const button = document.getElementById("button643");
let input = document.getElementsByClassName("input643");
let output = document.getElementById("output643");

button.addEventListener("click", () => {
    let row = document.createElement("tr");
    for (let i = 0; i < 3; i++) {
        let data = document.createElement("td");
        data.textContent = input[i].value;
        row.appendChild(data);
    }
    output.appendChild(row);
})