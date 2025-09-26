"use strict";

const input = document.getElementById("input932");
const output = document.getElementById("output932");

input.addEventListener("focusout", () => {
    let digits = String(input.value).split(".").join("").split("");
    let [digit, repeats] = findMostRepeatedDigit(digits);
    let dates = sameNumberCountDates(digit, repeats);
    for (let date of dates) {
        let listItem = document.createElement("li");
        let targetMonth = date.getMonth() + 1;
        let targetDay = date.getDate();
        if (targetMonth < 10) {
            targetMonth = "0" + targetMonth;
        }
        if (targetDay< 10) {
            targetDay = "0" + targetDay;
        }
        listItem.textContent += date.getFullYear() + "." + targetMonth + "." + targetDay;
        output.appendChild(listItem);
    }
    console.log(digit, repeats);
})

function findMostRepeatedDigit(digits) {
    let maxCount = 0;
    let mostRepeatingDigit;
    for (let item of digits) {
        let count = 0;
        for (let digit of digits) {
            if (item === digit) {
                count++;
            }
        }
        if (count > maxCount) {
            maxCount = count;
            mostRepeatingDigit = item;
        }
    }
    return [mostRepeatingDigit, maxCount];
}

function sameNumberCountDates(targetDigit, repeats) {
    let startYear = Math.trunc(new Date().getFullYear() / 100) * 100;
    let daysAmount = startYear + 36526;
    let datesNeeded = [];
    for (let i = 1; i <= daysAmount; i++) {
        let checkDate = new Date (startYear, 0, i);
        let checkDigits = (String(checkDate.getFullYear()) + (checkDate.getMonth() + 1) + checkDate.getDate()).split("");

        let counter = 0;
        for (let digit of checkDigits) {
            if (digit === targetDigit) {
                counter++;
            }
        }
        if (counter === repeats) {
            datesNeeded.push(checkDate);
        }
    }
    return datesNeeded;
}