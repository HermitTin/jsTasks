"use strict";

const button = document.getElementById("button712")
const output = document.getElementById("output712");
const punctuation = [".", ",", "!", "?", ":", ";"]

button.addEventListener("click", () => {
    let text = output.textContent;
    text = text.split(" ").map((word) => {
        if (punctuation.includes(word.at(-1))) {
            let clearWord = word.slice(0, -1);
            word = `<span>${clearWord}</span>${word.at(-1)}`;
            return word;
        } else {
            word = `<span>${word}</span>`;
            return word;
        }
    }).join(" ");
    output.textContent = "";
    output.innerHTML = text;
})
