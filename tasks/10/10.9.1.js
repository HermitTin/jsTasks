"use strict";

const input1 = document.getElementById("input1091_1")
const input2 = document.getElementById("input1091_2")
const button = document.getElementById("button1091")

const canvas = document.getElementById("canvas1091");
const ctx = canvas.getContext("2d");

button.addEventListener("click", () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  let coordXEnd = +input1.value.split(",")[0];
  let coordYEnd = +input1.value.split(",")[1];
  let angle = +input2.value;
  let length = 80;
  let coordXStart = coordXEnd + length * Math.cos(angle * Math.PI / 180);
  let coordYStart = coordYEnd - length * Math.sin(angle * Math.PI / 180);

  ctx.beginPath();
  ctx.moveTo(coordXStart, coordYStart); // початок
  ctx.lineTo(coordXEnd, coordYEnd); // кінець
  ctx.strokeStyle = "green";
  ctx.lineWidth = 3;
  ctx.stroke();

  let shoulderXStart1 = coordXEnd + 20 * Math.cos((angle - 15) * Math.PI / 180);
  let shoulderYStart1 = coordYEnd - 20 * Math.sin((angle - 15) * Math.PI / 180);
  ctx.beginPath();
  ctx.moveTo(shoulderXStart1, shoulderYStart1); // початок
  ctx.lineTo(coordXEnd, coordYEnd); // кінець
  ctx.strokeStyle = "green";
  ctx.lineWidth = 3;
  ctx.stroke();

  let shoulderXStart2 = coordXEnd + 20 * Math.cos((angle + 15) * Math.PI / 180);
  let shoulderYStart2 = coordYEnd - 20 * Math.sin((angle + 15) * Math.PI / 180);

  ctx.beginPath();
  ctx.moveTo(shoulderXStart2, shoulderYStart2); // початок
  ctx.lineTo(coordXEnd, coordYEnd); // кінець
  ctx.strokeStyle = "green";
  ctx.lineWidth = 3;
  ctx.stroke();
})
