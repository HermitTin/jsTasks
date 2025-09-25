"use strict";

const input = document.getElementById("input742");
input.innerHTML = input.textContent.split(" ").map((item) => {
    item = "<span>" + item + "</span>";
    return item;
}).join(" ");

input.addEventListener("click", (event) => {
    let parent = event.target.closest("#input742")
    if (parent) {
        event.target.style.color = "red";
    }
})