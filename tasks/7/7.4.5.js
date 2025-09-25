"use strict";

const input = document.getElementById("input745")
const output = document.getElementById("output745");
const button = document.getElementById("button745");

button.addEventListener("click", () => {
    let seconds = +input.value
    timerCount(seconds);
});

function createDelay(time) {
    return new Promise ((resolve) => {
        setTimeout(resolve, time);
    })
}

async function timerCount(seconds) {
    if (!Number.isFinite(seconds) || seconds < 0) {
        seconds = 0;
    }

    for (let i = seconds; i >= 0; i--) {
        output.textContent = i;
        await createDelay(1000);
    }
}