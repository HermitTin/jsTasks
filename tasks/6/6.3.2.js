"use strict";

const button = document.getElementById("button632");
const output = document.getElementById("output632");
let liElements = output.children;


button.addEventListener("click", () => {
    for (let i = 0; i < liElements.length; i++) {
        if (!liElements[i].textContent.endsWith(i + 1)) {
            liElements[i].textContent += ` ${i + 1}`;
        }
    }
})