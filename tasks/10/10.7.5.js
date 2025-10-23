"use strict";

const input = document.getElementById("input1075");
const output = document.getElementById("output1075");
let dictionary;
let words = [];

function findWordsByLetters() {
	let letters = input.value.split("");
	outer: for (let i = 0; i < dictionary.length; i++) {
		let currentWord = dictionary[i].split("");
		for (let j = 0; j < letters.length; j++) {
			if (!currentWord.includes(letters[j])) {
				continue outer;
			}
		}
		words.push(dictionary[i]);
	}
}

function printList(listItems) {
	listItems.forEach((element) => {
		let listItem = document.createElement("li");
		listItem.textContent = element;
		output.appendChild(listItem);
	});
}

async function readDictionary(path) {
	try {
		let response = await fetch(path);
		if (response.ok) {
			return await response.text();
		}
	} catch (error) {
		console.error("Fetch error");
	}
}

document.addEventListener('DOMContentLoaded', async () => {
	dictionary = await readDictionary("./words_alpha.txt");
	dictionary = dictionary.split("\r\n");

	input.addEventListener("focusout", () => {
		findWordsByLetters();
		printList(words);
	})
})