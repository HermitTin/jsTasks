"use strict";

const input = document.getElementById("input912");
let homeHostName = "JS_Study";

for (let ref of input.children) {
    if (ref.href.indexOf(homeHostName) === -1) {
        ref.target = "_blank";
    }
}
