"use strict";

const output = document.getElementById("output933");
const points = [
	[1, 2], [2, 4], [3, 8], [4, 16], [5, 32]
];

const canvas = output;
const ctx = canvas.getContext("2d");
ctx.fillStyle = "blue";

points.forEach((point) => {
    ctx.beginPath();
    ctx.arc(point[0], canvas.height - point[1], 2, 0, Math.PI * 2); // коло
    ctx.fill();
    
})