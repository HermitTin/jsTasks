"use strict";

let input = document.getElementById("input642")
let output = document.getElementById("output642");

document.addEventListener("focusout", (event) => {
    if (event.target.id === "input642") {
        let listItem = document.createElement("li");
        listItem.textContent = input.value;
        output.appendChild(listItem);
    }
    
})