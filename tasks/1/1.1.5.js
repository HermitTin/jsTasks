"use strict";

// Даны два слова. Проверьте, 
// что первые буквы этих слов совпадают.

function checkFirstLetter() {
  let wordFirst = prompt("Enter first word", 0).toLowerCase();
  let wordSecond = prompt("Enter second word", 0).toLowerCase();
  if (wordFirst[0] == wordSecond[0]) {
    console.log("The first letters are the same!");
  } else {
    console.log("The first letters are not the same!");
  }
}

checkFirstLetter();