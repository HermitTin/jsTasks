"use strict";

document.addEventListener("keydown", (event) => {
  if (event.ctrlKey && event.key === "Enter") {
    let text = window.getSelection().toString();;
    navigator.clipboard.writeText(text)
  }
})