"use strict";

const output = document.getElementById("output1094");

let matrix = [];
for (let i = 0; i < 10; i++) {
    matrix.push([]);
    for (let j = 0; j < 10; j++) {
        matrix[i].push(0);
    }
}

createShip(4, matrix);
createShip(3, matrix);
createShip(3, matrix);
createShip(2, matrix);
createShip(2, matrix);
createShip(2, matrix);
createShip(1, matrix);
createShip(1, matrix);
createShip(1, matrix);
createShip(1, matrix);



for (let i = 0; i < 10; i++) {
    let tr = document.createElement("tr");
    output.appendChild(tr);
    for (let j = 0; j < 10; j++) {
        let td = document.createElement("td");
        tr.appendChild(td);
        if (matrix[i][j] === 1) {
            td.style.backgroundColor = "black";
        }
    }
}

function createShip(length, output) {
    let isDone = false;
    outer: while (!isDone) {
        let direction = randomNumber(0, 1); //0 - column, 1 - row
        let coordX = randomNumber(0, 9);
        let coordY = randomNumber(0, 9);
        if (coordX > (10 - length) && direction == 0) {
            continue;
        }
        if (coordY > (10 - length) && direction == 1) {
            continue;
        }
        
        let checkXStart = coordX - 1;
        let limitX;
        let checkYStart = coordY - 1;
        let limitY;
        if (direction) {
            limitX = 3;
            limitY = length + 2;
        } else {
            limitX = length + 2;
            limitY = 3
        }
        for (let i = 0; i < limitX; i++) {
            for (let j = 0; j < limitY; j++) {
                if (checkXStart + i < 0 || checkXStart + i > 9) {
                    continue;
                }
                if (checkYStart + j < 0 || checkYStart + j > 9) {
                    continue;
                }
                if (matrix[checkXStart + i][checkYStart + j] === 1) {
                    continue outer;
                }
            }
        }

        if (direction) {
            for (let i = 0; i < length; i++) {
                matrix[coordX][coordY + i] = 1;
            }
        } else {
            for (let i = 0; i < length; i++) {
                matrix[coordX + i][coordY] = 1;
            }
        }
        isDone = true;
    }
}

function randomNumber(min, max) {
    let num = Math.trunc(min + Math.random() * (max - min + 1));
    return num;
}