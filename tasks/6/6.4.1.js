"use strict";

document.addEventListener("click", (event) => {
    let parent = event.target.closest("#output641");
    if (parent) {
        event.target.remove();
    }
})