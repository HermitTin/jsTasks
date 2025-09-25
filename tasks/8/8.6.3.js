"use strict";

const output = document.getElementById("output863");
const url = location.href;
for (let link of output.children) {
    if (link.children[0].href === url) {
        link.style.color = "red";
    }
}