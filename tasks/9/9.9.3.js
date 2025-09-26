"use strict";

const input = document.getElementById("input993");
const output = document.getElementById("output993");

input.addEventListener("focusout", () => {
    let counter = {};
    let text = input.value;
    text.split("").forEach((character) => {
        character = character.toLowerCase();
        if (counter[character]) {
            counter[character] += 1;
        } else {
            counter[character] = 1;
        }
    });

    let mostFrequentChar = ["", 0];
    for (let item in counter) {
        if (counter[item] > mostFrequentChar[1]) {
            mostFrequentChar[0] = item;
            mostFrequentChar[1] = counter[item];
        }
    }
    output.textContent = "The most frequently appearing symbol in given text is: \"" + mostFrequentChar[0] + "\"\nIt appears " 
    + mostFrequentChar[1] + " times";
})