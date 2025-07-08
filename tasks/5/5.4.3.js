"use strict";


document.addEventListener("click", (event) => {

  //5.4.3
  if (event.target.classList.contains("button543")) {
    let str = "";
    for (let i = 1; i < 10; i++) {
      str += i;
    }
    document.getElementById("output543").textContent = str;
  }
  
});





