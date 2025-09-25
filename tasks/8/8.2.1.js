"use strict";

const input = document.getElementById("input821")
const output = document.getElementById("output821");
const punctuation = [".", ",", "!", "?", ";", ":"]

input.addEventListener("focusout", () => {
    let text = input.value;
    let wordsList = {};
    let wordsCount = 0;
    text.split(" ").map((word) => {
        if (punctuation.includes(word.at(-1))) {
            word = word.slice(0, -1);
        }
        word = word.toLowerCase();
        if (!wordsList[word]) {
            wordsList[word] = 1;
        } else {
            wordsList[word] += 1;
        }
        wordsCount += 1;
    })
    
    printTable(wordsList, wordsCount)
})

function printTable(wordsList, wordsCount) {
    let table = document.createElement("table");
    output.appendChild(table);
    let row = document.createElement("tr");
    table.appendChild(row);
    createCell(row, "Word");
    createCell(row, "Count");
    createCell(row, "Percentage");
    for (let item in wordsList) {
        row = document.createElement("tr");
        table.appendChild(row);
        createCell(row, item);
        createCell(row, wordsList[item]);
        createCell(row, (wordsList[item] * 100 / wordsCount).toFixed(2) + "%");
    }
}

function createCell (parent, content) {
    let cell = document.createElement("td");
    cell.textContent = content;
    parent.appendChild(cell)
}