"use strict";

const button = document.getElementById("button921");
const output = document.getElementById("output921");

button.addEventListener("click", () => {
	let listItems = [...output.children];
	shuffle(listItems);
	for (let item of listItems) {
		output.appendChild(item);
	}
})

function shuffle(array) {
  let currentIndex = array.length;

  while (currentIndex != 0) {

    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
}