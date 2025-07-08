"use strict";


document.addEventListener("click", (event) => {

  //5.4.4
  if (event.target.classList.contains("button544")) {
    let output = document.getElementById("output544");
    let date = new Date();
    let months = ["january", "February", "March", "April", "May", "June", "July", 
      "August", "September", "October", "November", "December"]
    output.children[0].textContent = date.getFullYear();
    output.children[1].textContent = months[date.getMonth()];
    output.children[2].textContent = date.getDate();
  }

});





