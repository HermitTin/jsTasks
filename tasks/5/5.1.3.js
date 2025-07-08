"use strict";


document.getElementById("button").addEventListener("click", () => {
  let valueFirst = +document.getElementById("valueFirst").textContent;
  let valueSecond = +document.getElementById("valueSecond").textContent;
  document.getElementById("output").textContent = valueFirst + valueSecond;
});


