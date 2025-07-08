"use strict";

// Дано число. Проверьте, четное оно или нет.

function checkIsEven() {
  let number = +prompt("Enter number", 0);
  if (number == 0) {
    console.log("The number is 0! It's not even or not even");
  } else if (number % 2 == 1 || number % 2 == -1) {
    console.log("The number is not even!");
  } else {
    console.log("The number is even!");
  }
}

checkIsEven();
