"use strict";

const input = document.getElementById("input913");
const output = document.getElementById("output913");

let str = 'abcde abcde';
let del = 'abe';

input.textContent = "Source string: " + str + "\nstring to delete from source: " + del;

let symbols = del.split("");
for (let symbol of symbols) {
    str = deleteSymbol(symbol, str);
}

function deleteSymbol(symbol, string) {
    while (string.indexOf(symbol) != -1) {
        let position = string.indexOf(symbol);
        if (position === 0) {
            string = string.slice(1);
        } else {
            string = string.slice(0, position) + string.slice(position + 1);
        }
    }
    return string;
}

output.textContent = str;