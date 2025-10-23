"use strict";

const output = document.getElementById("output1093");

let ms = +sessionStorage.getItem("ms");
if (isNaN(ms)) {
  ms = 3600000;
}


function timer() {
  ms = ms - 1000;
  if (ms < 0) {
    output.textContent = "0:0"
    clearInterval();
  }
  sessionStorage.setItem("ms", ms);
  output.textContent = Math.trunc(ms / 60000) + ":" + (ms / 1000 % 60);
  return ms;
}

output.textContent = Math.trunc(ms / 60000) + ":" + (ms / 1000 % 60);
setInterval(timer, 1000);