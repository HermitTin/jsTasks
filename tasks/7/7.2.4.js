"use strict";

let targetArray = [];
for (let i = 0; i < 5; i++) {
    targetArray.push([]);
    for( let j = 0; j <= i; j++) {
        targetArray[i].push("x");
    }
}
console.log(targetArray);