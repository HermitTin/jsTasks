"use strict";

const button = document.getElementById("button731")
const input = document.getElementById("input731");
const punctuation = [".", ",", "?", "!", ";", ":"]

button.addEventListener("click", () => {
    let text = input.textContent;
    text = text.split(" ").reduce((acc, item) => {
        let punctuationSign = "";
        if (punctuation.includes(item.at(-1))) {
            punctuationSign = item.at(-1);
            item = item.slice(0, -1);
        }

        if (!acc.includes(item)) {
            acc.push(item + punctuationSign);
        } else {
            acc[acc.length - 1] += punctuationSign;
        }
        return acc;
    }, []).join(" ");

    input.textContent = text;
});