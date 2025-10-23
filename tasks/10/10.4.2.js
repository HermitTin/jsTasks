"use strict";

const output = document.getElementById("output1042");

timeToNewYear();
setInterval(timeToNewYear, 1000);

function timeToNewYear() {
    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();
    let timeLeft = new Date(currentYear + 1, 0, 1) - currentDate;
    let days = Math.trunc(timeLeft / 86400000);
    let hours = Math.trunc((timeLeft % 86400000) / 3600000);
    if (hours < 10) {
        hours = "0" + hours;
    }
    let minutes = Math.trunc((timeLeft % 3600000) / 60000);
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    let seconds = Math.trunc((timeLeft % 60000) / 1000);
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    output.textContent = "Time until New Year come: " + days + " days, " + hours + ":" + minutes + ":" + seconds
}