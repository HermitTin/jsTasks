"use strict";

const inputText = document.getElementById("inputText6104");
const input = document.getElementById("input6104");
const output = document.getElementById("output6104");
const button = document.getElementById("button6104");
const punctuation = [" ", ",", ".", "!", "?", ";", ":"]

button.addEventListener("click", () => {
    let text = inputText.textContent.toUpperCase();
    let searchWord = input.value.toUpperCase();
    let counter = 0;
    for (let currentPosition = -1; currentPosition < text.length; ) {
        currentPosition = text.indexOf(searchWord, currentPosition + 1);
        if (currentPosition != -1 && punctuation.includes(text[currentPosition - 1]) 
            && punctuation.includes(text[currentPosition + searchWord.length])) {
            counter++;
        }
        if (currentPosition === -1) {
            break;
        }
    }
    output.textContent = counter;
})

