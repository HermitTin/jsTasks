"use strict";

const output = document.getElementById("output883");

let events = [
	{
		date:  '2019-12',
		event: 'name1',
	},
	{
		date:  '2019-12',
		event: 'name2',
	},
	{
		date:  '2019-11',
		event: 'name3',
	},
	{
		date:  '2019-11',
		event: 'name4',
	},
	{
		date:  '2020-10',
		event: 'name5',
	},
	{
		date:  '2020-10',
		event: 'name6',
	},
	{
		date:  '2020-11',
		event: 'name5',
	},
	{
		date:  '2020-11',
		event: 'name6',
	},
	{
		date:  '2020-12',
		event: 'name7',
	},
	{
		date:  '2020-12',
		event: 'name8',
	},
	{
		date:  '2020-12',
		event: 'name9',
	},
]

let newDataOrder = {};
for (let item of events) {
    let propName = item.date.split("-")[0];
    let subPropName = item.date.split("-")[1];
    if(newDataOrder[propName]) {
        if (newDataOrder[propName][subPropName]) {
            newDataOrder[propName][subPropName].push(item.event);
        } else {
            newDataOrder[propName][subPropName] = [];
            newDataOrder[propName][subPropName].push(item.event);
        }
    } else {
        newDataOrder[propName] = {};
        newDataOrder[propName][subPropName] = [];
        newDataOrder[propName][subPropName].push(item.event);
    }
}
console.log(newDataOrder);

output.textContent = "{\n";
for (let prop in newDataOrder) {
    output.textContent += "\t" + prop + ": {\n";
    for (let subProp in newDataOrder[prop]) {
        output.textContent += "\t\t" + subProp + ": [" + newDataOrder[prop][subProp] + "]\n";
    }
    output.textContent += "\t}\n";
}
output.textContent += "}\n";