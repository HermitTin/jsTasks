"use strict";

const output = document.getElementById("output1074");
const tableContent = output.children[0];
tableCellIterating(tableContent)


document.addEventListener("click", (event) => {
  let rows = tableContent.children;
  let cell = event.target;
  if (cell.tagName === "TD") {
    let cellIndex = cell.cellIndex;
    let rowIndex = cell.parentElement.rowIndex;
    let cellsInRow = cell.parentElement.children;

    if (cell.style.backgroundColor === "red") {
      cell.style.backgroundColor = "";
      if (rows[rowIndex - 1].children[cellIndex] && 
        rows[rowIndex - 1].children[cellIndex].style.backgroundColor != "red") {
        rows[rowIndex - 1].children[cellIndex].dataset.isBlocked = false;
      }
      if (rows[rowIndex + 1].children[cellIndex] && 
        rows[rowIndex + 1].children[cellIndex].style.backgroundColor != "red") {
        rows[rowIndex + 1].children[cellIndex].dataset.isBlocked = false;
      }
    } else {
      if (cell.dataset.isBlocked != "true") {
        cell.style.backgroundColor = "red";
        if (rows[rowIndex - 1].children[cellIndex]) {
          rows[rowIndex - 1].children[cellIndex].dataset.isBlocked = true;
        }
        if (rows[rowIndex + 1].children[cellIndex]) {
          rows[rowIndex + 1].children[cellIndex].dataset.isBlocked = true;
        }
      }
    }
  }
})

function tableCellIterating(tableContent) {
  for (let row of tableContent.children) {
    for (let cell of row.children) {
      cell.dataset.isLocked = false;
    }
  }
}