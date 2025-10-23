"use strict";

const canvas = document.getElementById("canvas1082");
const ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.arc(200, 200, 180, Math.PI, Math.PI * 2); // x, y, радіус, початок, кінець кута
ctx.strokeStyle = "purple";
ctx.lineWidth = 20;
ctx.stroke();

ctx.beginPath();
ctx.arc(200, 200, 160, Math.PI, Math.PI * 2); // x, y, радіус, початок, кінець кута
ctx.strokeStyle = "blue";
ctx.lineWidth = 20;
ctx.stroke();

ctx.beginPath();
ctx.arc(200, 200, 140, Math.PI, Math.PI * 2); // x, y, радіус, початок, кінець кута
ctx.strokeStyle = "lightBlue";
ctx.lineWidth = 20;
ctx.stroke();

ctx.beginPath();
ctx.arc(200, 200, 120, Math.PI, Math.PI * 2); // x, y, радіус, початок, кінець кута
ctx.strokeStyle = "green";
ctx.lineWidth = 20;
ctx.stroke();

ctx.beginPath();
ctx.arc(200, 200, 100, Math.PI, Math.PI * 2); // x, y, радіус, початок, кінець кута
ctx.strokeStyle = "yellow";
ctx.lineWidth = 20;
ctx.stroke();

ctx.beginPath();
ctx.arc(200, 200, 80, Math.PI, Math.PI * 2); // x, y, радіус, початок, кінець кута
ctx.strokeStyle = "orange";
ctx.lineWidth = 20;
ctx.stroke();

ctx.beginPath();
ctx.arc(200, 200, 60, Math.PI, Math.PI * 2); // x, y, радіус, початок, кінець кута
ctx.strokeStyle = "red";
ctx.lineWidth = 20;
ctx.stroke();