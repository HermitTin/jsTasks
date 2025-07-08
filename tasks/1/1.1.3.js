"use strict";

// Дана строка. Выведите в консоль последний символ строки.

function latsCharOfString() {
  let string = prompt("Enter something", "");
  console.log(`The last character of ${string} is ${string.at(-1)}`)
}

latsCharOfString();