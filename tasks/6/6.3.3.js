"use strict";

document.addEventListener("click", (event) => {
    let parent = event.target.closest(".output633")
    if (parent) {
        if(event.ctrlKey) {
            event.target.remove();
        }
    }
})