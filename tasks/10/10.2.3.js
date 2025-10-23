"use strict";

const output = document.getElementById("output1023");

let savedWidth = sessionStorage.getItem("textAreaWidth");
let savedHeight = sessionStorage.getItem("textAreaHeight");
let prevWidth;
let prevHeight;
if (savedWidth && savedHeight) {
    output.style.width = savedWidth;
    output.style.height = savedHeight;
    prevWidth = savedWidth;
    prevHeight = savedHeight;
} else {
    prevWidth = getComputedStyle(output).width;
    prevHeight = getComputedStyle(output).height;
}

output.addEventListener("mouseup", () => {
    let width = getComputedStyle(output).width;
    let height = getComputedStyle(output).height;

    if (width != prevWidth || height != prevHeight) {
        sessionStorage.setItem("textAreaWidth", width);
        sessionStorage.setItem("textAreaHeight", height);
        prevWidth = width;
        prevHeight = height;
    }
})