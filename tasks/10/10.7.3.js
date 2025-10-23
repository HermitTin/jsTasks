"use strict";

const output = document.getElementById("output1073");
const tableContent = output.children[0];
tableCellIterating(tableContent)


document.addEventListener("click", (event) => {
  let cell = event.target;
  if (cell.tagName === "TD") {
    let cellIndex = cell.cellIndex;
    let cellsInRow = cell.parentElement.children;

    if (cell.style.backgroundColor === "red") {
      cell.style.backgroundColor = "";
      if (cellsInRow[cellIndex - 1] && cellsInRow[cellIndex - 2].style.backgroundColor != "red") {
        cellsInRow[cellIndex - 1].dataset.isBlocked = false;
      }
      if (cellsInRow[cellIndex + 1] && cellsInRow[cellIndex + 2].style.backgroundColor != "red") {
        cellsInRow[cellIndex + 1].dataset.isBlocked = false;
      }
    } else {
      if (cell.dataset.isBlocked != "true") {
        cell.style.backgroundColor = "red";
        if (cellsInRow[cellIndex - 1]) {
          cellsInRow[cellIndex - 1].dataset.isBlocked = true;
        }
        if (cellsInRow[cellIndex + 1]) {
          cellsInRow[cellIndex + 1].dataset.isBlocked = true;
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