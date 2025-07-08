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

});





