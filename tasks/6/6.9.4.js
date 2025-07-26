"use strict";

const button = document.getElementById("button694");
let output = document.getElementById("output694");

button.addEventListener("click", () => {
    let ulChildren = output.children;
    let lastNumber = +ulChildren[ulChildren.length - 1].textContent;
    let listElement = document.createElement("li");
    listElement.textContent = lastNumber + 1;
    output.appendChild(listElement);
})

