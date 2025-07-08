"use strict";

// Дано число. Выведите в консоль первую цифру этого числа.

function lastDigitOfNumber() {
  let number = prompt("Enter number", 0);
  console.log(`The last digit is ${number.at(-1)}`)
}

lastDigitOfNumber();