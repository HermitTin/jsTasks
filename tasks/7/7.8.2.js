"use strict";

const output = document.getElementById("output782")

const punctuation = [".", ",", "!", "?", "!", ";"];
let wrappedWordsText = output.textContent.split(" ").map((word) => {
    let wrappedWord = "";
    if (punctuation.includes(word.at(-1))) {
        wrappedWord = `<span>${word.slice(0, -1)}</span>${word.at(-1)}`
    } else {
        wrappedWord = `<span>${word}</span>`
    }
    return wrappedWord;
}).join(" ");
output.innerHTML = wrappedWordsText;

document.addEventListener("click", (event) => {
    let parent = event.target.closest("#output782");
    if (parent && event.target.tagName === "SPAN") {
        let word = event.target.textContent;
        word = word.split("").reverse().join("");
        event.target.textContent = word;
    }
})