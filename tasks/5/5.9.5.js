"use strict";

let input = document.getElementById("input595");
let output = document.getElementById("output595");

input.addEventListener("focusout", () => {
    let text = input.textContent.split(". ");
    for (let sentence of text) {
        let listElem = document.createElement("li");
        listElem.textContent = sentence;
        output.appendChild(listElem);
    }
})