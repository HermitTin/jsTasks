"use strict";

document.addEventListener("click", (event) => {
    if (event.target.tagName === "TD") {
        if (event.shiftKey) {
            event.target.style.backgroundColor = "red";
        }
        if (event.ctrlKey) {
            event.target.style.backgroundColor = "green";
        }
    }
})

