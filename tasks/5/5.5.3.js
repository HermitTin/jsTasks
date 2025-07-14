"use strict";

document.addEventListener("click", (event) => {
    if (event.target.id === "button553") {
        let input = document.getElementById("input553").value;
        document.getElementById("output553").textContent = input[input.length - 1];
    }
})