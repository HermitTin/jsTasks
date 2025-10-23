"use strict";
let viewportWidth = window.innerWidth;
let viewportHeight = window.innerHeight;
let popUp;
const body = document.getElementsByTagName("body")[0];

document.addEventListener("click", (event) => {
    if (popUp) {
        popUp.remove();
    }
    if (event.target.classList.contains("content")) {
        let posX = event.clientX;
        let posY = event.clientY;
        popUp = document.createElement("div");
        popUp.classList.add("popUp");
        body.appendChild(popUp);
        let popUpHeight = parseInt(getComputedStyle(popUp).height);
        if (viewportHeight - posY < popUpHeight) {
            popUp.style.top = posY - popUpHeight + "px";
        } else {
            popUp.style.top = posY + "px";
        }
        popUp.style.left = posX + "px";
    }
})