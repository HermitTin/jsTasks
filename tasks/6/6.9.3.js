"use strict";

document.addEventListener("click", (event) => {
    if(event.target.tagName === "LI") {
        let string = event.target.textContent;
        let count = string.split(" ").at(-1);
        let newString;
        if (!count) {
            count = "0";
            newString = string.slice(0, -count.length) + " " + String(+count + 1);
        } else {
            newString = string.slice(0, -count.length) + String(+count + 1);
        }
        event.target.textContent = newString;
    }
})

