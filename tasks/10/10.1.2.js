"use strict";

const container = document.getElementsByTagName("html")[0];
let viewportHeight = window.innerHeight;
container.style.height = String(viewportHeight) + "px";;
let counter = 0;

document.addEventListener("click", (event) => {
    let prevPopUp = document.getElementsByClassName("popUp")[0];
    if (prevPopUp) {
        prevPopUp.remove();
    }
    counter++;
    const coordX = event.clientX;
    const coordY = event.clientY;
    let popUpDiv = document.createElement("div");
    popUpDiv.classList.add("popUp");
    popUpDiv.style.left = String(coordX - 10) + "px";
    popUpDiv.style.top = String(coordY - 10) + "px";
    popUpDiv.textContent = counter;
    container.appendChild(popUpDiv);
})