"use strict";

const output = document.getElementById("output1063");
const button = document.getElementById("button1063");
const tableContent = output.children[0];
const figures = {
    "cube": [[1, 1], [1, 1]],
    "line": [[1], [1], [1], [1]],
    "L": [[1, 0], [1, 0], [1, 1]],
    "T": [[1, 1, 1], [0, 1, 0]],
    "Z": [[1, 1, 0], [0, 1, 1]],
}

printFigures(figures);

async function printFigures(figures) {
    for (let figure in figures) {
        let figureCoords = figures[figure];
        let partCoords = defineFigureCoords(figureCoords);
        printFigure(tableContent, partCoords);

        button.addEventListener("click", () => {
            figureCoords = rotateMatrix(figureCoords);
            partCoords = defineFigureCoords(figureCoords);
            printFigure(tableContent, partCoords);
        })
        
        await pause(3000);
    }
}

function printFigure(tableContent, partCoords) {
    clearTable(tableContent)
    let rows;
    if (tableContent.children[0].tagName === "TBODY") {
        rows = tableContent.children[0].children;
    } else {
        rows = tableContent.children;
    }

    for (let row of rows) {
        for (let cell of row.children) {
            let cellCoords = String(row.rowIndex) + ", " + cell.cellIndex;
            if (partCoords.includes(cellCoords)) {
                cell.style.backgroundColor = "red";
            }
        }
    }
}

function rotateMatrix(matrixArray) {
    let result = [];
    for (let j = 0; j < matrixArray[0].length; j++) {
        result.push([]);
        for (let i = matrixArray.length - 1; i >= 0; i--) {
            result[j].push(matrixArray[i][j])
        }
    }
    return result;
}

function defineFigureCoords(figure) {
    let tableCenterCoords = [Math.trunc((tableContent.children.length - 1) / 2),
    Math.trunc((tableContent.children[0].children.length - 1) / 2)];
    let partCoords = [];
    for (let i = 0; i < figure.length; i++) {
        for (let j = 0; j < figure[i].length; j++) {
            if (figure[i][j] != 0) {
                let cellCoords = String(tableCenterCoords[0] + i) + ", " + (tableCenterCoords[0] + j);
                partCoords.push(cellCoords);
            }
        }
    }
    return partCoords;
}

function clearTable(table) {
    let rows;
    if (table.children[0].tagName === "TBODY") {
        rows = table.children[0].children;
    } else {
        rows = table.children;
    }
    for (let row of rows) {
        for (let cell of row.children) {
            cell.style.background = "";
        }
    }
}

function pause(ms) {
    return new Promise((res) => {
        setTimeout(res, ms);
    })
}


