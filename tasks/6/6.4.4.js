"use strict";

let input = document.getElementById("input644")
let output = document.getElementById("output644");

document.addEventListener("focusout", (event) => {
    output.innerHTML = "";
    let parent = event.target.closest("#input644");
    if (parent) {
        let year = +input.value;
        for (let i = 0; i < 12; i++) {
            let date = new Date(year, i, 13);
            if (date.getDay() === 5) {
                let listElement = document.createElement('li');
                listElement.textContent = date;
                output.appendChild(listElement);
            }
        }
    }
});
