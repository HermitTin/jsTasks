"use strict";


document.addEventListener("click", (event) => {
  //5.4.2
  if (event.target.classList.contains("button542")) {
    let container = document.getElementById("output542");
    let aTagList = document.getElementById("input542").getElementsByTagName("a");

    for (let child of aTagList) {
      let p = document.createElement("p");
      p.textContent = child.getAttribute("href")
      container.appendChild(p);
    }
  }

});





