"use strict";

const input = document.getElementById("input842");
const output = document.getElementById("output842");
const punctuation = [".", ",", "!", "?", ":", ";"]
let obj = {};
let countObj = {};
let count = input.textContent.split("").length;

input.textContent.toLowerCase().split("").map((char) => {
    if (obj[char] === undefined) {
        obj[char] = "";
        countObj[char] = 1;
    } else {
        countObj[char] += 1;
    }
})

let table = document.createElement("table");
output.appendChild(table);
let row = document.createElement("tr");
table.appendChild(row);
createCell(row, "Character");
createCell(row, "Percentage");

for (let value in obj) {
    obj[value] = String((countObj[value] * 100 / count).toFixed(2)) + "%";
    let row = document.createElement("tr");
    table.appendChild(row);
    createCell(row, value);
    createCell(row, obj[value])
}

function createCell(parent, content) {
    let cell = document.createElement("td");
    parent.appendChild(cell);
    cell.textContent = content;
}