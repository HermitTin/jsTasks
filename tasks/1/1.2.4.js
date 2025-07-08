"use strict";

// Дано число. Выведите количество цифр в этом числе.

function digitsCount() {
  let number = prompt("Enter some number", 123);
  console.log(`The ${number} contains ${number.length} digits`);
}

digitsCount();