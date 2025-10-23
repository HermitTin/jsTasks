"use strict";

const input = document.getElementById("input1013");
const output = document.getElementById("output1013");
const punctuation = [".", ",", "!", "?", ";", ":", "-", "_"];
const text = 'aaa bbb, ccc. Xxx - eee bbb, kkk!';

input.textContent = text;
let wordsArr = text.split(" ").reduce((acc, word) => {
    if (punctuation.includes(word.at(-1))) {
        word = word.slice(0, -1);
    }
    if (word != "") {
        acc.push(word);
    }
    return acc;
}, [])
output.textContent = wordsArr;