"use strict";

const output = document.getElementById("output983");

document.addEventListener("click", (event) => {
    let parent = event.target.closest(".tableHead")
    if (parent) {
        let tdata = output.children[0];
        let columnNumber = parent.cellIndex;
        let rows = [...tdata.children];
        rows.sort((a, b) => {
            return a.children[columnNumber].textContent - b.children[columnNumber].textContent;
        })
        
        for (let row of rows) {
            tdata.appendChild(row);
        }
    }
})