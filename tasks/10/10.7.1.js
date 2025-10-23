"use strict";

const output = document.getElementById("output1071");
const tableContent = output.children[0];

document.addEventListener("click", (event) => {
  if (event.target.tagName === "TD") {

    if (event.target.style.backgroundColor === "red") {
      event.target.style.backgroundColor = ""
    } else {
      let count = 0;
      for (let cell of event.target.parentElement.children) {
        if (cell.style.backgroundColor === "red") {
          count++;
        }
      }
      if (count < 5) {
        event.target.style.backgroundColor = "red";
      }
    }
  }
})
