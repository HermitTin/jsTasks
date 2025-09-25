"use strict";

const input = document.getElementById("input722")
const output = document.getElementById("output722");

input.addEventListener("focusout", () => {
    output.innerHTML = "";
    let year = +input.value;
    for (let i = 0; i <= 11; i++) {
        let date = new Date(year, i, 13);
        let liItem = document.createElement("li");
        liItem.textContent = date;
        output.appendChild(liItem);
    }
})
