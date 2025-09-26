"use strict";

const output = document.getElementById("output992");
const button = document.getElementById("button992");

button.addEventListener("click", () => {
    let tdata = output.children[0];
    let values = [];
    for (let row of tdata.children) {
        for (let cell of row.children) {
            values.push(cell.textContent);
        }
    }
    values = shuffle(values);

    let i = 0;
    for (let row of tdata.children) {
        for (let cell of row.children) {
            cell.textContent = values[i];
            i++;
        }
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
  return array;
}