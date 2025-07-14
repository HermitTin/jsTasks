"use strict";

document.addEventListener("click", (event) => {
    let parent = event.target.closest(".output592")
    if (parent) {
        event.target.style.color = "red";
    }
})