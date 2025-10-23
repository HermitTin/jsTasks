"use strict";

const input = document.getElementById("input1081");
const output = document.getElementById("output1081");

input.addEventListener("focusout", () => {
  let srcArr = input.value.split(",").map((item) => {
    return +item;
  });
  output.innerHTML = "";
  arrayElementsSwap(srcArr);
})

function arrayElementsSwap(arr, iterator = 0) {
  if (iterator === arr.length - 1) {
    createListItem(arr);
    return;
  }

  for (let i =  iterator; i < arr.length; i++) {
    [arr[iterator], arr[i]] = [arr[i], arr[iterator]];

    arrayElementsSwap(arr, iterator + 1);

    [arr[iterator], arr[i]] = [arr[i], arr[iterator]];
  }
}

function createListItem(content) {
    let listItem = document.createElement("li");
    output.appendChild(listItem);
    listItem.textContent = content;
}
