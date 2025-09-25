"use strict";

const button = document.getElementById("button831")
const output = document.getElementById("output831");


button.addEventListener("click", () => {
    for (let item of output.children) {
        item.checked = !item.checked;
    }
})