"use strict";

const button = document.getElementById("button871");
const output = document.getElementById("output871");

button.addEventListener("click", () => {
    let word = output.textContent.split("");
    word = shuffle(word).join("");
    output.textContent = word;
})

function shuffle(array) {
  let currentIndex = array.length;

  while (currentIndex != 0) {

    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
  return array
}