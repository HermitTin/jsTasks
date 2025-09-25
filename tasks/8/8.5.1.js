"use strict";

const input = document.getElementById("input851");
const output = document.getElementById("output851");
const srcArr = ["apple", "pineapple", "cherry", "pear", "plum", "cucumber", "apricot", "peach"]

input.textContent = "The source array is: [" + srcArr + "]";

let sortedByChar = {};
let srcArrSorted = srcArr.sort();
for (let word of srcArrSorted) {
    if (!sortedByChar[word[0]]) {
        sortedByChar[word[0]] = [];
        sortedByChar[word[0]].push(word);
    } else {
        sortedByChar[word[0]].push(word);
    }
}

for (let char in sortedByChar) {
    createList(output, char, sortedByChar[char])
}

function createList(parent, head, itemsSrc) {
    let listHeader = document.createElement("h2");
    listHeader.textContent = "First character is: "+ head;
    parent.appendChild(listHeader);
    let list = document.createElement("ul");
    parent.appendChild(list);
    for (let item of itemsSrc) {
        let listItem = document.createElement("li");
        listItem.textContent = item;
        list.appendChild(listItem);
    }
}