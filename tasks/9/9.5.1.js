"use strict";

const input = document.getElementById("input951");
const output = document.getElementById("output951");

input.addEventListener("change", () => {
	let activeItem;
	for (let item of input) {
		if (item.selected) {
			activeItem = item;
		}
	}
	let radio = document.getElementsByTagName("input");
	for (let button of radio) {
		if (button.value === activeItem.value) {
			button.checked = true;
		}
	}
})