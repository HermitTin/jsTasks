"use strict";

const output = document.getElementById("output733");

let data = [
	{
		text: '111',
		href: '1.html',
	},
	{
		text: '222',
		href: '2.html',
	},
	{
		text: '333',
		href: '3.html',
	},
]

for (let item of data) {
    let link = document.createElement("a");
    link.href = item.href;
    link.textContent = item.text;
    output.appendChild(link);
}