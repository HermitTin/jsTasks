"use strict";

const output = document.getElementById("output845");

let data = [
	{
		country: 'country1',
		city:    'city11',
	},
	{
		country: 'country2',
		city:    'city21',
	},
	{
		country: 'country3',
		city:    'city31',
	},
	{
		country: 'country1',
		city:    'city12',
	},
	{
		country: 'country1',
		city:    'city13',
	},
	{
		country: 'country2',
		city:    'city22',
	},
	{
		country: 'country3',
		city:    'city31',
	},
]

let newDataOrder = {};

for (let item of data) {
    if (!newDataOrder[item.country]) {
        newDataOrder[item.country] = [];
        newDataOrder[item.country].push(item.city);
    } else {
        newDataOrder[item.country].push(item.city);
    }
}
console.log(newDataOrder);

output.textContent = "{\n"
for (let item in newDataOrder) {
    output.textContent += "\t" + item + ": ["+ newDataOrder[item] + "]\n"
}
output.textContent += "}"