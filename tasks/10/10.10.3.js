"use strict";

const canvas = document.getElementById("canvas10103");
const ctx = canvas.getContext("2d");

const img = new Image();
img.src = "../jsTasks/img/clock.png";
img.onload = function () {
  ctx.drawImage(img, 0, 0, 400, 400);
};

drawArrows(img)
setInterval(drawArrows, 1000, img);

function drawArrows(img) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(img, 0, 0, 400, 400);
  ctx.save();
  ctx.translate(0, 400);
  ctx.rotate(-Math.PI / 2);
  let currentDate = new Date;
  let hours = currentDate.getHours();
  if (hours > 12) {
    hours = hours - 12;
  }
  let minutes = currentDate.getMinutes();
  let seconds = currentDate.getSeconds();
  let secondsArrowAngle = (Math.PI * 2) / 60 * seconds;
  let secondsArrowX = Math.trunc(200 + 150 * Math.cos(-secondsArrowAngle));
  let secondsArrowY = Math.trunc(200 - 150 * Math.sin(-secondsArrowAngle));

  ctx.beginPath();
  ctx.moveTo(200, 200);
  ctx.lineTo(secondsArrowX, secondsArrowY);
  ctx.strokeStyle = "green";
  ctx.lineWidth = 3;
  ctx.stroke();

  let minutesArrowAngle = (Math.PI * 2) / 60 * minutes;
  let minutesArrowX = Math.trunc(200 + 150 * Math.cos(-minutesArrowAngle));
  let minutesArrowY = Math.trunc(200 - 150 * Math.sin(-minutesArrowAngle));

  ctx.beginPath();
  ctx.moveTo(200, 200);
  ctx.lineTo(minutesArrowX, minutesArrowY);
  ctx.strokeStyle = "blue";
  ctx.lineWidth = 6;
  ctx.stroke();

  let hoursArrowAngle = (Math.PI * 2) / 12 * hours;
  let hoursArrowX = Math.trunc(200 + 150 * Math.cos(-hoursArrowAngle));
  let hoursArrowY = Math.trunc(200 - 150 * Math.sin(-hoursArrowAngle));

  ctx.beginPath();
  ctx.moveTo(200, 200);
  ctx.lineTo(hoursArrowX, hoursArrowY);
  ctx.strokeStyle = "black";
  ctx.lineWidth = 9;
  ctx.stroke();
  ctx.restore();

}

