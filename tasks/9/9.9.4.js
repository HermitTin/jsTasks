"use strict";

const output = document.getElementById("output994");

let inputs = output.children;
let counter = 0;
let number = 1;

function setValue(inputs) {
	inputs[counter].value = number;
	counter++
	number++;
	if (counter > 4) {
		counter = 0;
	}
}

setInterval(setValue, 1000, inputs);