"use strict";


document.getElementById("button").addEventListener("click", () => {
  let paragraphs = document.getElementsByTagName("p");
  document.getElementById("output").textContent = paragraphs.length;
});





