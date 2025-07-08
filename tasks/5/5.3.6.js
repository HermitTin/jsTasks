"use strict";


document.addEventListener("click", (event) => {

  //5.3.6
  if (event.target.id == "button531") {
    let number = +document.getElementById("input536").value;
    let factorial = 0;
    for (let i = 1; i <= number; i++) {
      factorial += i;
    }
    document.getElementById("output536").children[0].textContent = factorial;
  }

});





