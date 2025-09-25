"use strict";

const input = document.getElementById("input725");
const paragraphs = input.children;
let outputArray = [];

for (let item of paragraphs) {
    outputArray.push(item.textContent);
}
console.log(outputArray);