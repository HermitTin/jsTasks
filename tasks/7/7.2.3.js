"use strict";

const inputs = document.getElementsByClassName("inputs723")
const output = document.getElementById("output723");
let outputText = [];

document.addEventListener("click", (event) => {
    if (event.target.classList.contains("inputs723")) {
        if (event.target.checked) {
            outputText.push(event.target.value);
        }
        if (!event.target.checked) {
            outputText = outputText.reduce((acc, item) => {
                if (item != event.target.value) {
                    acc.push(item);
                }
                return acc;
            }, []);
        }
        output.textContent = outputText;
    }
})