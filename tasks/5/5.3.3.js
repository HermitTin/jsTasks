"use strict";


document.addEventListener("click", (event) => {
  //5.3.3
  if (event.target.id == "button533") {
    let numberStr = document.getElementById("input533").value;
    let digitsSum = numberStr.split("").reduce((acc, digit) => {
      acc += +digit;
      return acc;
    }, 0);
    document.getElementById("output533").textContent = digitsSum;
  }
});





