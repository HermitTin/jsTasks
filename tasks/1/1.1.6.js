"use strict";

// Дано слово. Получите его последнюю букву. 
// Если слово заканчивается на мягкий знак, то получите предпоследнюю букву.

function lastCharOfWord() {
  let word = prompt("Enter world");
  if (word.at(-1).toLowerCase() === "ь") {
    console.log(`last character is 'ь' so output is ${word.at(-2)}`);
  } else {
    console.log(`last character is ${word.at(-1)}`);
  }
}

lastCharOfWord();