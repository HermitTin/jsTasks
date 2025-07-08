"use strict";


document.getElementById("button").addEventListener("click", () => {
  let num1 = +document.getElementById("input1").value;
  let num2 = +document.getElementById("input2").value;
  document.getElementById("output").textContent = num1 + num2;
});


