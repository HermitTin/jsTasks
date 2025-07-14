"use strict";

let button = document.getElementById("button5102");
let arr = [];

button.addEventListener("click", () => {
    let number = Math.trunc(Math.random() * 101);
    arr.push(number);
    console.log(arr);
})