"use strict";

const refs = document.getElementsByClassName("refs");
for (let ref of refs) {
    ref.addEventListener("mouseover", (event) => {
        let parent = event.target.closest(".refs");
        if (parent) {
            let paragraph = parent.children[0]
            let ref = parent.children[1];
            paragraph.classList.add("isActive");
            paragraph.textContent = ref.href;
        }
    })

    ref.addEventListener("mouseout", (event) => {
        let parent = event.target.closest(".refs");
        if (parent) {
            let paragraph = parent.children[0];
            paragraph.classList.remove("isActive");
            paragraph.textContent = "";
        }
        
    })
}

