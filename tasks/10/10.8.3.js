"use strict";

const output = document.getElementById("output1083");
const input1 = document.getElementById("input1083_1");
const input2 = document.getElementById("input1083_2");
const button = document.getElementById("button1083");

button.addEventListener("click", () => {
  let number1 = +input1.value;
  let number2 = +input2.value;
  if (number1 != number2) {
    let sum1 = 0;
    let sum2 = 0;
    let limit = Math.max(number1, number2)
    for (let i = 0; i < limit; i++) {
      if (i < number1) {
        if (number1 % i === 0) {
          sum1 += i;
        }
      }
      if (i < number2) {
        if (number2 % i === 0) {
          sum2 += i;
        }
      }
    }
    
    if (sum1 === number2 && sum2 === number1) {
      output.textContent = "The numbers are amicable";
    } else {
      output.textContent = "The numbers aren't amicable"
    }
  }
})