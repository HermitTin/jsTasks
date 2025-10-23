"use strict";

const input = document.getElementById("input1052");

input.addEventListener("keydown", (event) => {
    if (event.key === "Tab") {
        let position = input.selectionStart;
        let text = input.value;
        text = text.slice(0, position) + "\t" + text.slice(position);
        input.value = text;
    }
})