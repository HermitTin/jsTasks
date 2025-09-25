"use strict";

const button = document.getElementById("button781");
const output = document.getElementById("output781");

const params = new URLSearchParams(location.search)
if (params.get("listItem")) {
	addLinks();
	let listElement = document.getElementById(params.get("listItem"));
	listElement.classList.toggle("crossed")
}

button.addEventListener("click", addLinks);

function addLinks() {
	for (let element of output.children) {
		element.innerHTML += `<a href="?listItem=${element.textContent}" id="${element.textContent}">cross out text</a>`;
	}
}