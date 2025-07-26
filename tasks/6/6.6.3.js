"use strict";

const colorArray = ["red", "green", "blue", "yellow", "brown"];

document.addEventListener("click", (event) => {
    if (event.target.tagName === "TD") {
        let arrIndex = Math.trunc(Math.random() * 5);
        event.target.style.backgroundColor =  colorArray[arrIndex];
    }
})

