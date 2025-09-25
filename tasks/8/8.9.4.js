"use strict";

const input = document.getElementById("input894");
const output = document.getElementById("output894");

input.addEventListener("keydown", (event) => {
    if (event.shiftKey && event.key === "Enter") {
        let text = input.value;
        text.split(".").map((item) => {
            if (item != "") {
                let listItem = document.createElement("li");
                output.appendChild(listItem);
                listItem.textContent = item;
            }
            
        })
    }
})