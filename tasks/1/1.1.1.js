"use strict";

// Дано число. Проверьте, отрицательное оно или нет.
// Выведите об этом информацию в консоль.

function checkSign() {
  let number;

  do {
    number = +prompt("Enter number", 0);
  } while (!isFinite(number));

  if (number > 0) {
    console.log(`The ${number} is positive!`)
  } else if (number < 0) {
    console.log(`The ${number} is negative!`)
  } else {
    console.log(`The ${number} is not positive or negative!`)
  }

}

checkSign();