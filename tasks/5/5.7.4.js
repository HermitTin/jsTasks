"use strict";


document.addEventListener("click", (event) => {
    if (event.target.classList.contains("output574")) {
        let currentTransform = event.target.style.transform;
        let finishANglePos = currentTransform.indexOf("deg");
        let currentAngle = +currentTransform.slice(7, finishANglePos);
        event.target.style.transform = `rotate(${currentAngle + 180}deg)`;
    }
})