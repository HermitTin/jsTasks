"use strict";


document.addEventListener("click", (event) => {

  //5.3.5
  if (event.target.id == "button535") {
    let divs = document.getElementsByClassName("div535");
    for (let i = 0; i < divs.length; i++) {
      divs[i].  textContent = i + 1;
    }
  }

});





