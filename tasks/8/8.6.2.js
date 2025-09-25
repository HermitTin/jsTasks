"use strict";

const output = document.getElementById("output862");
const input = document.getElementById("input862");
const button = document.getElementById("button862");

button.addEventListener("click", () => {
    let searchWord = input.value.toLowerCase();
    let position = output.textContent.toLowerCase().indexOf(searchWord);
    let text = output.textContent;
    let newText = text.slice(0, position) + "<span>" + text.slice(position, position + searchWord.length) +
    "</span>" + text.slice(position + searchWord.length);
    output.innerHTML = newText;
    output.children[0].style.color = "red";
})

