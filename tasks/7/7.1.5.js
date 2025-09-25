"use strict";

const output = document.getElementById("output715");

let targetArr = [];
for (let i  = 0; i < 3; i++) {
    targetArr.push([]);
    for (let j = 0; j < 3; j++) {
        targetArr[i].push([1, 2, 3]);        
    }
}
console.log(targetArr)
