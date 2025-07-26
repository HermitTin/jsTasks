"use strict";

const button = document.getElementById("button653");
let output = document.getElementById("output653");
let inputWrapper = document.getElementById("inputWrapper653");

button.addEventListener("click", () => {
    let wrapper = document.createElement("div");
    let inputElement = document.createElement("input");
    inputElement.classList.add("input653");
    inputWrapper.appendChild(wrapper)
    wrapper.appendChild(inputElement);
    
})

document.addEventListener("input", (event) => {
    let parent = event.target.closest("#inputWrapper653")
    if (parent) {
        let sum = 0;
        let inputs = document.getElementsByClassName("input653");
        for (let element of inputs) {
            sum += +element.value;
        }
        output.textContent = sum;
    }
})