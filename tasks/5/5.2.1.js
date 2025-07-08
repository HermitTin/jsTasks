"use strict";


function getSum() {
  let sum = 0;
  for (let i = 1; i <= 100; i++) {
    sum += i;
  }
  return sum;
}

document.addEventListener("click", (event) => {
  console.log(event.target);
  if (event.target.id == ('button')) {
    document.getElementById("output").innerText = getSum();
  }
});


