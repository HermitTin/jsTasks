"use strict";

const button = document.getElementById("button952");
const output = document.getElementById("output952");

button.addEventListener("click", () => {
    let tdata = output.children[0];
    removeColor(tdata);
    let amount = randomNumber (1, 9);
    let counter = 0;
    while (counter != amount) {
        let cell = tdata.children[randomNumber(0, 3)].children[randomNumber(0, 3)];
        if (cell.style.backgroundColor === "red") {
            continue;
        } else {
            cell.style.backgroundColor = "red";
            counter++;
        }
    }
    
    

outer:for (let row of tdata.children) {
        for (let cell of row.children) {
            if (cell.style.backgroundColor != "red") {
                cell.style.backgroundColor = "red";
                break outer;
            }
        }
    }
})

function removeColor(table) {
    for (let row of table.children) {
        for (let cell of row.children) {
            cell.style.backgroundColor = "";
        }
    }
}

function randomNumber(min, max) {
	let number = min + Math.trunc(Math.random() * (max - min));
	return number;
}