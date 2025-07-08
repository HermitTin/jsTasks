"use strict";

//Сделайте функцию, которая параметром будет получать дату, 
// а возвращать знак зодиака, соответствующий этой дате.

function dateToZodiac (date) {
    let period = date.getTime() - new Date(date.getFullYear(), 0);
    let zodiakSigns = [[1630800000, "Capricorn", "December 22 - January 19"], [4222800000, "Aquaarius", "January 20 - February 18"], 
                        [6814800000, "Pisces", "February 19 - March 20"], [9406800000, "Aries", "March 21 - April 19"],
                        [12085200000, "Taurus", "April 20-may 20"], [14763600000, "Gemini", "May 21-june 20"], 
                        [17528400000, "Cancer", "June 21-july 22"], [20206800000, "Leo", "July 23 - August 22"], 
                        [22885200000, "Virgo", "August 23 - September 22"], [25477200000, "Libra", "September 23 - October 22"],
                        [28069200000, "Scorpio", "October 23 - November 21"], [30661200000, "Sagittarius", "November 22 - December 21"], 
                        [31438800000, "Capricorn", "December 22 - January 19"]
                    ]
    
    for (let dates in zodiakSigns) {
        if (period < zodiakSigns[dates][0]) {
            console.log(`The zodiak sign is ${zodiakSigns[dates][1]}, period is ${zodiakSigns[dates][2]}`);
            break;
        }
    }
}

let date = new Date();
dateToZodiac(date);
