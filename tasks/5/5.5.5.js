"use strict";


document.addEventListener("focusout", (event) => {
    let input = document.getElementById("input555").value;
    let output = document.getElementById("output555");
    if (event.target.id === "input555") {
        output.textContent = input.split(" ").length;
    }
})