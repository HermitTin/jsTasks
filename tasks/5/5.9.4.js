"use strict";

let input = document.getElementById("input594");

input.addEventListener("focusout", () => {
    let inputDate = input.value;
    if (inputDate.includes("-")) {
        let newFormDate = inputDate.split("-").reverse().join(".");
        input.value = newFormDate;
    }
})