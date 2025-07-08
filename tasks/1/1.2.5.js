"use strict";

// Даны два числа. Проверьте, что первые цифры этих чисел совпадают.

function firstDigitsCompare() {
  let numberFirst = prompt("Enter first number", 123);
  let numberSecond = prompt("Enter second number", 321);
  
  if (numberFirst[0] == numberSecond[0]) {
    console.log("First digits are equal!");
  } else {
    console.log("First digits are not equal!");
  }
}

firstDigitsCompare();