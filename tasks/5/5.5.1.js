"use strict";


let input = document.getElementById("input551");
let button = document.getElementById("button551")

button.addEventListener("click", () => {
    document.getElementById("output1").textContent = input.value.split("-")[0];
    document.getElementById("output2").textContent = input.value.split("-")[1];
    document.getElementById("output3").textContent = input.value.split("-")[2];
})
