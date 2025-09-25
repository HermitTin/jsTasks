"use strict";

const button = document.getElementById("button751");

button.addEventListener("click", () => {
	window.scrollTo({top: document.body.scrollHeight, left: 0, behavior: "smooth"});
})