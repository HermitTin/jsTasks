"use strict";


document.addEventListener("click", (event) => {

  //5.4.5
  if (event.target.classList.contains("button545")) {
    let href = "http://www.example.html";
    document.getElementById("output545").children[0].textContent = href;
  }

});





