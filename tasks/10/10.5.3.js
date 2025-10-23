"use strict";

const input1 = document.getElementById("input1053_1");
const input2 = document.getElementById("input1053_2");
const input3 = document.getElementById("input1053_3");
const button1 = document.getElementById("button1053_1");
const button2 = document.getElementById("button1053_2");
const button3 = document.getElementById("button1053_3");
let inputed = {};

document.addEventListener("keydown", (event) => {
    if (event.target.tagName === "INPUT") {
        if (event.key === "Enter") {
            let inputData = event.target.value;
            event.target.value = "";
            let id = event.target.name;
            if (inputed[id]) {
                inputed[id].push(inputData);
            } else {
                inputed[id] = [];
                inputed[id].push(inputData);
            }
        }
    }
})

document.addEventListener("click", (event) => {
    if (event.target.tagName === "BUTTON") {
        let id=event.target.name;
        let text = inputed[id].at(-1);
        event.target.nextElementSibling.value = text;
    }
})

