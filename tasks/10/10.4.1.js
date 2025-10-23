"use strict";

const input = document.getElementById("input1041");
const output = document.getElementById("output1041");
const button = document.getElementById("button1041");

button.addEventListener("click", () => {
	let text = input.value;
	let textArr = text.split(" ");
	text = shuffle(textArr).join(" ");
	output.textContent = text;
})

function shuffle(array) {
  let currentIndex = array.length;

  while (currentIndex != 0) {

    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
  return array;
}