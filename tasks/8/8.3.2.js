"use strict";

const output = document.getElementById("output832");

let arr = [1, 2, 3, 4, 5, 6];
let num = 3;

for (let i = arr.length; i < num*num; i++) {
    arr.push(" ");
}

output.textContent = "[" + arr + "]\narray length = " + arr.length ;