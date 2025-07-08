"use strict";


document.addEventListener("click", (event) => {
  if (event.target.classList.contains('value')) {
    event.target.textContent **= 2;
  }
});


