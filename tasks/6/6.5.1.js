"use strict";

let output = document.getElementById("output651");
let input = document.getElementById("input651");

document.addEventListener("focusout", (event) => {
    let parent = event.target.closest("#input651");
    if (parent) {
        let currentDate = new Date().getTime();
        let birthDate = new Date(input.value).getTime();
        output.textContent = Math.trunc((currentDate - birthDate) / 31536000000)

    }
})

