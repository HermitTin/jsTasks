"use strict";

const output = document.getElementById("output783");

let users = [
	{id: 1, name: 'user1', surn: 'surn1', age: 30},
	{id: 2, name: 'user2', surn: 'surn2', age: 31},
	{id: 3, name: 'user3', surn: 'surn3', age: 32},
];

let table = document.createElement("table");
output.appendChild(table);
const tableTitles = Object.keys(users[1]);
let row = document.createElement("tr");
table.appendChild(row);
for (let element of tableTitles) {
	let char = document.createElement("td");
	char.textContent = element;
	char.style.backgroundColor = "grey";
	row.appendChild(char);
}

for (let element of users) {
	let values = Object.values(element);
	row = document.createElement("tr");
	table.appendChild(row);
	for (let value of values) {
		let char = document.createElement("td");
		char.textContent = value;
		row.appendChild(char);

	}
}