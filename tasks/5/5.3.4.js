"use strict";


document.addEventListener("click", (event) => {

  //5.3.4
  if (event.target.id == "button534") {
    let str = document.getElementById("input534").value;
    str = str.split("").reverse().join("");
    document.getElementById("output534").textContent = str;
  }

});





