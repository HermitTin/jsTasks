"use strict";


const container = document.getElementById("container581");

container.addEventListener("focusout", (event) => {
    if (event.target.classList.contains("input581")) {
        event.target.value *= event.target.value;
    }
})
