"use strict";

// Сделайте функцию, которая параметром будет получать дату, 
// а возвращать день недели словом, соответствующий этой дате.

function dayOfWeek(date) {
	let day = date.getDay();
    switch (day) {
        case 0:
            return "Sunday";
        case 1:
            return "Monday";
        case 2:
            return "Tuesday";
        case 3:
            return "Wednesday";
        case 4:
            return "Thursday";
        case 5:
            return "Friday";
        case 6:
            return "Saturday";
    }
}
let now = new Date();
console.log(dayOfWeek(now));