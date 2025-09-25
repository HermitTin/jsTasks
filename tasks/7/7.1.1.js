"use strict";

const button = document.getElementById("button711")
const output = document.getElementById("output711");


button.addEventListener("click", () => {
    let listItems = output.getElementsByTagName("li");
    let maxNumber = listItems[0].textContent;
    let maxNumbElement = listItems[0];
    for (let li of listItems) {
        if (+maxNumber < +li.textContent) {
            maxNumber = li.textContent;
            maxNumbElement = li;
        }
    }
    maxNumbElement.remove();
})