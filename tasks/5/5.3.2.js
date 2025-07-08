"use strict";


document.addEventListener("click", (event) => {

  //5.3.2
  if (event.target.id == "button532") {
    let numberFirst = +document.getElementById("inputFirst532").value;
    let numberSecond = +document.getElementById("inputSecond532").value;
    document.getElementById("output532").textContent = Math.max(numberFirst, numberSecond);
  }

});





