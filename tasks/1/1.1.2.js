"use strict";

// Дана строка. Выведите в консоль длину этой строки.

function displayLength() {
  let string = prompt("Enter something", "");
  console.log(`The length of ${string} is ${string.length}`)
}

displayLength();
