"use strict";

document.addEventListener("click", (event) => {
    let parent = event.target.closest(".menuItem")
    if (parent) {
        parent.children[1].classList.toggle("expanded");
    }
})