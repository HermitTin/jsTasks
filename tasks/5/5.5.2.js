"use strict";


document.addEventListener("click", (event) => {
    let arr = [];
    if (event.target.id === "button552") {
        let input1 = +document.getElementById("input552_1").value;
        let input2 = +document.getElementById("input552_2").value;
        for (let i = input1; i<= input2; i++) {
            arr.push(i);
        }
        console.log(arr);
    }
})