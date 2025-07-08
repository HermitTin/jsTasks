"use strict";

// Дано число. Выведите в консоль первую цифру этого числа.

function firstDigitOfNumber() {
  let number = prompt("Enter number", 0);
  console.log(`The first digit is ${number[0]}`)
}

firstDigitOfNumber();