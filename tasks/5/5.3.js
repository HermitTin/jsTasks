"use strict";


document.addEventListener("click", (event) => {

  //5.3.1
  if (event.target.id == "button531") {
    let number = +document.getElementById("input531").value;
    let factorial = 0;
    for (let i = 1; i <= number; i++) {
      factorial += i;
    }
    document.getElementById("output531").children[0].textContent = factorial;
  }

  //5.3.2
  if (event.target.id == "button532") {
    let numberFirst = +document.getElementById("inputFirst532").value;
    let numberSecond = +document.getElementById("inputSecond532").value;
    document.getElementById("output532").textContent = Math.max(numberFirst, numberSecond);
  }

  //5.3.3
  if (event.target.id == "button533") {
    let numberStr = document.getElementById("input533").value;
    let digitsSum = numberStr.split("").reduce((acc, digit) => {
      acc += +digit;
      return acc;
    }, 0);
    document.getElementById("output533").textContent = digitsSum;
  }

  //5.3.4
  if (event.target.id == "button534") {
    let str = document.getElementById("input534").value;
    str = str.split("").reverse().join("");
    document.getElementById("output534").textContent = str;
  }

  //5.3.5
  if (event.target.id == "button535") {
    let divs = document.getElementsByClassName("div535");
    for (let i = 0; i < divs.length; i++) {
      divs[i].  textContent = i + 1;
    }
  }

});





