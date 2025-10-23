"use strict";

const url = new URL(location);
const params = new URLSearchParams(location.search);
const input1 = document.getElementById("input1084_1");
const input2 = document.getElementById("input1084_2");
const textArea = document.getElementById("textarea1084");
const checkboxes = document.getElementsByClassName("checkbox");
const radios = document.getElementsByClassName("radio");

document.addEventListener("DOMContentLoaded", () => {
    let input1Content = params.get("input1Value");
    if (input1Content) {
        input1.value = input1Content
    }
    let input2Content = params.get("input2Value");
    if (input2Content) {
        input2.value = input2Content
    }
    let textAreaContent = params.get("textAreaValue");
    if (textAreaContent) {
        textArea.value = textAreaContent
    }
    for (let i = 0; i < checkboxes.length; i++) {
        let isChecked = params.get(`checkbox${i}`);
        if (isChecked != undefined) {
            if (isChecked === "true") {
                checkboxes[i].checked = true;
            } else {
                checkboxes[i].checked = false;
            }
            
        }
    }
    for (let i = 0; i < radios.length; i++) {
        let isChecked = params.get(`radio${i}`);
        if (isChecked != undefined) {
            if (isChecked === "true") {
                radios[i].checked = true;
            } else {
                radios[i].checked = false;
            }
            
        }
    }
})

document.addEventListener("input", (event) => {
    if (event.target.id === "input1084_1") {
        url.searchParams.set("input1Value", input1.value);
    }
    if (event.target.id === "input1084_2") {
        url.searchParams.set("input2Value", input2.value);
    }
    if (event.target.id === "textarea1084") {
        url.searchParams.set("textAreaValue", textArea.value);
    }
    history.replaceState(null, "", url);
})

document.addEventListener("change", (event) => {
    if (event.target.classList.contains("checkbox")) {
        for (let i = 0; i < checkboxes.length; i++) {
            url.searchParams.set(`checkbox${i}`, checkboxes[i].checked);
        }
    }
    if (event.target.classList.contains("radio")) {
        for (let i = 0; i < radios.length; i++) {
            url.searchParams.set(`radio${i}`, radios[i].checked);
        }
    }
    history.replaceState(null, "", url);
})