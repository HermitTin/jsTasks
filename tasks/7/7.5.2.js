"use strict";

document.addEventListener("click", (event) => {
    if (event.target.classList.contains("button752")) {
        event.target.nextElementSibling.classList.toggle("expanded")
    }
})