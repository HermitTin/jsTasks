"use strict";

const output = document.getElementById("output875");

let events = {
	'2019-12-29': ['name1', 'name3', 'name5', 'name7'],
	'2019-12-30': ['name4', 'name8', 'name9'],
	'2019-12-31': ['name2', 'name6'],
}

let newDataOrder = [];
for (let item in events) {
	for (let value of events[item]) {
		let eventDataObj = {};
		eventDataObj.date = item;
		eventDataObj.event = value;
		newDataOrder.push(eventDataObj);
	}
}

output.textContent = "[\n";
for (let item of newDataOrder) {
	output.textContent += "\t{\n\t\tdate: "  + item.date + ",\n\t\tevent: " + item.event + ",\n\t},\n"
}
output.textContent += "]\n"