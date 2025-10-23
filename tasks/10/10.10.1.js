"use strict";

const input = document.getElementById("input10101");
const button = document.getElementById("button10101");
const output = document.getElementById("output10101");

button.addEventListener("click", () => {
  let number1 = input.value.split("/")[0];
  let number2 = input.value.split("/")[1];
  let limit = Math.min(number1, number2) / 2;
  for (let i = 2; i < limit; i++) {
    if (number1 % i === 0 && number2 % i === 0) {
      number1 = number1 / i;
      number2 = number2 / i;
      i = 2;
    }
  }
  output.textContent = number1 + "/" + number2;
})