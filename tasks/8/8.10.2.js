"use strict";

const output = document.getElementById("output8102");
const input = document.getElementById("input8102");

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
let number = 3;
input.textContent = "The input array is: [" + arr + "]\nthe limiter is: " + number;
let tempArr = [[]];

let count = 0;
for (let item of arr) {
    if (count > 2) {
        count = 0;
        tempArr.push([]);
    }
    tempArr[tempArr.length - 1].push(item);
    count ++;
}

arr = tempArr;

output.textContent = "{\n";
for (let item of arr) {
    output.textContent += "\t[" + item + "]\n";
}
output.textContent += "}\n";