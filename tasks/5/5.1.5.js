"use strict";


document.addEventListener("focusout", (event) => {
  if (event.target.classList.contains('input')) {
    event.target.value **= 2;
  }
});


