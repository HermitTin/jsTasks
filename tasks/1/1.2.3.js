"use strict";

// Дано число. Выведите в консоль сумму первой и последней цифры этого числа.

function firstAndLastDigitsSum() {
  let number = prompt("Enter number", 123);
  console.log(`The sum of first and last digits of number is 
  ${+number.at(-1) + +number[0]}`)
}

firstAndLastDigitsSum();