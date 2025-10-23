"use strict";

const input = document.getElementById("input1061");

input.addEventListener("input", () => {
  let text = input.value;
  if (text.slice(-4) === "blur") {
    input.blur();
  }
})