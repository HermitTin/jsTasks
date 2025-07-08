"use strict";


document.getElementById("button").addEventListener("click", () => {
  let num = +document.getElementById("output").textContent;
  document.getElementById("output").textContent = num ** 2;
});


