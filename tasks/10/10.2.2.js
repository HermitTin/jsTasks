"use strict";

const output = document.getElementById("output1022");
const tData = output.children[0];
let lastCellIndex = [-1, -1]

setInterval(fillRandomCell, 1000, tData);

function fillRandomCell(tableContent) {
    clearCellsColor(tableContent);
    let rowsCount = tableContent.children.length;
    let columnsCount = tableContent.children[0].children.length;
    let rowIndex;
    let cellIndex;
    do {
        rowIndex = randomNumber(0, rowsCount);
        cellIndex = randomNumber(0, columnsCount);
    } while (rowIndex === lastCellIndex[0] && cellIndex === lastCellIndex[1])
    lastCellIndex[0] = rowIndex;
    lastCellIndex[1] = cellIndex;
    for (let row of tableContent.children) {
        for (let cell of row.children) {
            if (row.rowIndex === rowIndex && cell.cellIndex === cellIndex) {
                cell.style.backgroundColor = "red";
            }
        }
    }
}

function randomNumber(min, max) {
    let number = Math.trunc(min + Math.random() * (max - min))
    return number;
}

function clearCellsColor(tableContent) {
    for (let row of tableContent.children) {
        for (let cell of row.children) {
            cell.style.backgroundColor = "";
        }
    }
}