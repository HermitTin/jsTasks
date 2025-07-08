"use strict";


document.addEventListener("click", (event) => {
    if (event.target.classList.contains("taskDiv")) {
        event.target.textContent = "!";
    }
});





