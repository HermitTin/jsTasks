"use strict";

const output = document.getElementById("output9103");

let data = [
	{
		year:  2019,
		month: 11,
		day: 20,
		data: ['массив с данными']
	},
	{
		year:  2019,
		month: 11,
		day: 21,
		data: ['массив с данными']
	},
	{
		year:  2019,
		month: 12,
		day: 25,
		data: ['массив с данными']
	},
	{
		year:  2019,
		month: 12,
		day: 26,
		data: ['массив с данными']
	},
	{
		year:  2020,
		month: 10,
		day: 29,
		data: ['массив с данными']
	},
	{
		year:  2020,
		month: 10,
		day: 30,
		data: ['массив с данными']
	},
	{
		year:  2020,
		month: 11,
		day: 19,
		data: ['массив с данными']
	},
	{
		year:  2020,
		month: 11,
		day: 20,
		data: ['массив с данными']
	},
]

let newDataOrder = {};
for (let item of data) {
    if (newDataOrder[item.year]) {
        if (newDataOrder[item.year][item.month]) {
            newDataOrder[item.year][item.month][item.day] = item.data;
        } else {
            newDataOrder[item.year][item.month] = {}
            newDataOrder[item.year][item.month][item.day] = item.data;
        }
    } else {
        newDataOrder[item.year] = {};
        newDataOrder[item.year][item.month] = {};
        newDataOrder[item.year][item.month][item.day] = item.data;
    }
}

output.textContent = "{\n";
for (let item in newDataOrder) {
    output.textContent += "\t{" + item + ": {\n";
    for (let subItem in newDataOrder[item]) {
        output.textContent += "\t\t" + subItem + ": {\n";
        for (let data in newDataOrder[item][subItem]) {
            output.textContent += "\t\t\t{" + data + ": " + newDataOrder[item][subItem][data] + "\n";

        }
        output.textContent += "\t\t}\n";
    }
    output.textContent += "\t}\n";
}
output.textContent += "\n}";