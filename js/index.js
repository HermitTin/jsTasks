"use strict";

//elements cashing
const header = document.getElementById("header");
const headerInnerContainer = document.getElementById("headerInnerContainer")
const manifestFile = "./manifest.json"
const headerSecond = document.getElementById("headerSecond");
const headerThird = document.getElementById("headerThird");
const mainContainer = document.getElementById("mainContainer");
let headerButtonsTopRank;
let headerButtonsSecondRank;
let headerButtonsThirdRank;
let manifestData = [];
let consoleOutputDiv;


//functions

//get manifest data
async function manifestRequest() {
    try {
        let responce = await fetch(manifestFile)
        let manifest;
        if (responce.ok) {
            manifest = await responce.json();
        }
        else {
            throw new Error("Inproper network responce");
        }
        manifestData = manifest;
        return manifest;
    } catch (error) {
        console.error('Fetch error:');
    }
    
}

async function taskFileRequest(path) {
    try {
        let responce = await fetch(path)
        let documentText;
        if (responce.ok) {
            documentText = await responce.text();
            return documentText;
        } else {
            throw new Error("Inproper network responce");
        }

    } catch {
        console.error('Fetch error:');
    }
}

//animations
function headerAnimationWrapper() {
    let currentState;

    header.addEventListener("mouseenter", () => {
        currentState = "animating";
        headerExpand();
        setTimeout(() => currentState = "waiting", 500);
    });

    header.addEventListener("mouseleave", () => {
        if (currentState === "animating") {
            headerCollapseEarly();
        } else {
            headerCollapse();
        }
    });
}

function headerExpand() {
    header.classList.add("expanded");
    for (let button of headerButtonsTopRank) {
        button.classList.add("expanded");
    }
    header.classList.remove("fastCollapse");
    for (let button of headerButtonsTopRank) {
        button.classList.remove("fastCollapse");
    }

    for (let i = 1; i < headerButtonsTopRank.length; i++) {
        if (headerButtonsTopRank[i].classList.contains("isActive")) {
            headerSecondExpand();
        }
    }

    if (headerButtonsSecondRank) {
        for (let button of headerButtonsSecondRank) {
            if (button.classList.contains("isActive")) {
                headerThirdExpand();
            }
        }
    }
}

function headerCollapse() {
    headerSecondCollapse();
    headerThirdCollapse();
    header.classList.remove("expanded");
    for (let button of headerButtonsTopRank) {
        button.classList.remove("expanded");
    }
}

function headerCollapseEarly() {
    headerCollapse();
    header.classList.add("fastCollapse");
    for (let button of headerButtonsTopRank) {
        button.classList.add("fastCollapse");
    }
}

function headerSecondExpand() {
    headerSecond.classList.add("expanded");
}

function headerSecondCollapse() {
    headerSecond.classList.remove("expanded");
}

function headerThirdExpand() {
    headerThird.classList.add("expanded");
}

function headerThirdCollapse() {
    headerThird.classList.remove("expanded");
}

async function contentFadeAnimation(parent, contentCreateFunction) {
    
}


//creating elements
function createHeaderButtons(row, clickedButton) {
    if (row === 0) {
        let elementsCount = Object.keys(manifestData).length;
        createButtonsSet(`Chapter `, "headerButton", `task `,
             headerInnerContainer, elementsCount);
        headerButtonsTopRank = document.getElementsByClassName("headerButton");
    }
    if (row === 1) {
        clearInnerContent(headerSecond);
        const id = clickedButton.id.split(" ");
        const chapterNumber = id[id.length - 1][0];
        let elementsCount = Object.keys(manifestData[`task ${chapterNumber}`]).length;
        createButtonsSet(`Section ${chapterNumber}.`, "headerSecondButton",
             `task group ${chapterNumber}.`, headerSecond, elementsCount)
        headerButtonsSecondRank = document.getElementsByClassName("headerSecondButton");
    }
    if (row === 2) {
        clearInnerContent(headerThird);
        const id = clickedButton.id.split(" ");
        const taskNumber = id[id.length - 1];
        const sectionNumber = id[id.length - 1].split(".")[1];
        const chapterNumber = taskNumber[0];
        let elementsCount = Object.keys(manifestData[`task ${chapterNumber}`][`task group ${chapterNumber}.${sectionNumber}`]).length;
        createButtonsSet(`Task ${chapterNumber}.${sectionNumber}.`, "headerThirdButton",
             `task number ${chapterNumber}.${sectionNumber}.`, headerThird, elementsCount);
        headerButtonsThirdRank = document.getElementsByClassName("headerThirdButton");
    }
}

function createHomePage() {
    clearInnerContent(mainContainer);
    let elementsCount = Object.keys(manifestData).length;
    let buttonNameGeneral = `Chapter `;
    let buttonClassName = "homePageChapterButton";
    let buttonId = `home page button task `;
    createButtonsSet(buttonNameGeneral, buttonClassName, buttonId, mainContainer, elementsCount)
    let homePageChapters = document.getElementsByClassName("homePageChapterButton");
    
    for (let i = 0; i < homePageChapters.length; i++) {
        let buttonNameGeneral = `Section ${i + 1}.`;
        let buttonClassName = `homePageSectionButton homePageSectionButtonChapter${i + 1}`;
        let buttonId = `home page button task group ${i + 1}.`;
        let elementsCount = Object.keys(manifestData[`task ${i + 1}`]).length;
        createButtonsSet(buttonNameGeneral, buttonClassName, buttonId, homePageChapters[i], elementsCount);        
        let sectionButtonsSet = mainContainer.getElementsByClassName(`homePageSectionButtonChapter${i + 1}`);

        for (let j = 0; j < sectionButtonsSet.length; j++) {
            let container = createItem("div", "homePageTaskButtonContainer", undefined, sectionButtonsSet[j])
            let elementsCount = Object.keys(manifestData[`task ${i + 1}`][`task group ${i + 1}.${j + 1}`]).length;
            let buttonNameGeneral = `${i + 1}.${j + 1}.`;
            let buttonClassName = `homePageTaskButton`;
            let buttonId = `home page button task number ${i + 1}.${j + 1}.`;
            createButtonsSet(buttonNameGeneral, buttonClassName, buttonId, container, elementsCount);
        }
    }
}

async function createTaskPage(clickedButton) {
    clearInnerContent(mainContainer);
    let taskId = clickedButton.id.split(" ");
    let taskFullNumber = taskId[taskId.length - 1];
    let taskNumber = taskFullNumber.split(".")[2];
    let taskGroup = `task group ` + taskFullNumber.split(".")[0] + `.` + taskFullNumber.split(".")[1];
    let chapterNumber = `task ` + taskFullNumber.split(".")[0];

    let taskPageContainer = createItem("div", "taskPageContainer", undefined, mainContainer);
    let resultContainer = createItem("div", "resultContainer", undefined, taskPageContainer)
    let resultFrame = createItem("iframe", "resultFrame", undefined, resultContainer);
    let consoleOutputContainer = createButton("Console output", "consoleOutputContainer", undefined, resultContainer);
    consoleOutputDiv = createItem("div", "consoleOutputDiv", "consoleOutputDiv", consoleOutputContainer);
    consoleToDiv(consoleOutputDiv);
    let htmlTaskData = await getHtml(taskFullNumber);
    resultFrame.srcdoc = htmlTaskData.documentElement.outerHTML;

    let codeContainer = createItem("div", "codeContainer", undefined, taskPageContainer);
    let taskTextContainer = createItem("div", "taskTextConteiner", undefined, codeContainer);
    let taskTextParagraph = createItem("p", "taskTextParagraph", undefined, taskTextContainer);
    taskTextParagraph.textContent = Object.values(manifestData[chapterNumber][taskGroup])[taskNumber - 1].taskDescription;
    let taskCode = createItem("div", "taskCode", undefined, codeContainer);
    taskCode.innerHTML = '<pre><code id="output" class="language-javascript"></code></pre>'; //highlight js code insertion
    let codeBlock = document.getElementById("output");
    let jsText = await getJS(taskFullNumber);
    codeBlock.textContent = jsText;
    hljs.highlightElement(codeBlock);
    createNavButtons();
} 

function createNavButtons() {
    let activeTaskButtonNumber = (headerThird.getElementsByClassName("isActive")[0]).id.split(" ").at(-1);
    if (activeTaskButtonNumber != "1.1.1") {
        createItem("div", "navButton navButtonBack", getNavButtonsId("nav button task ", -1), mainContainer);
    }
    let maxChapterNumber = Object.keys(manifestData).length;
    let maxGroupNumber = Object.keys(manifestData[`task ${maxChapterNumber}`]).length;
    let maxTaskNumber = manifestData[`task ${maxChapterNumber}`][`task group ${maxChapterNumber}.${maxChapterNumber}`].length;
    let maxNumber = `${maxChapterNumber}.${maxGroupNumber}.${maxTaskNumber}`;
    if (activeTaskButtonNumber != maxNumber) {
        createItem("div", "navButton navButtonNext", getNavButtonsId("nav button task ", +1), mainContainer);
    }
}

function getNavButtonsId(nameTemplate, step) {
    let currentTaskFullNumber = (headerThird.getElementsByClassName("isActive")[0]).id.split(" ").at(-1);
    let targetTaskFullNumber = "";
    let targetChapterNumber = +currentTaskFullNumber[0];
    let targetGroupNumber = +currentTaskFullNumber[2];

    if (step > 0) {
        if (currentTaskFullNumber.split(".")[2] >= headerThird.children.length) {
            if (currentTaskFullNumber.split(".")[1] >= headerSecond.children.length) {
                targetChapterNumber += 1;
                targetTaskFullNumber = `${targetChapterNumber}.1.1`;
            } else {
                targetGroupNumber += 1;
                targetTaskFullNumber = `${targetChapterNumber}.${targetGroupNumber}.1`;
            }

        } else {
           targetTaskFullNumber = `${targetChapterNumber}.${targetGroupNumber}.${+currentTaskFullNumber[4] + 1}`;
        }
    } else {
        if (currentTaskFullNumber.split(".")[2] == 1) {
            if (currentTaskFullNumber.split(".")[1] == 1) {
                targetChapterNumber -= 1;
                targetGroupNumber = Object.keys(manifestData[`task ${targetChapterNumber}`]).length;
                let targetTaskNumber = Object.keys(manifestData[`task ${targetChapterNumber}`]
                    [`task group ${targetChapterNumber}.${targetGroupNumber}`]).length;
                targetTaskFullNumber = `${targetChapterNumber}.${targetGroupNumber}.${targetTaskNumber}`;
            } else {
                let targetTaskNumber = Object.keys(manifestData[`task ${targetChapterNumber}`]
                    [`task group ${targetChapterNumber}.${targetGroupNumber}`].length);
                targetTaskFullNumber = `${targetChapterNumber}.${targetGroupNumber}.${targetTaskNumber}`;
            }
        } else {
            targetTaskFullNumber = `${targetChapterNumber}.${targetGroupNumber}.${+currentTaskFullNumber.split(".")[2] - 1}`
        }
    }
    let targetTaskId = nameTemplate + targetTaskFullNumber;
    return targetTaskId;
}

async function getHtml(taskFullNumber) {
    let chapterNumber = taskFullNumber[0];
    let path;
    if (chapterNumber < 5) {
        path = `./tasks/${chapterNumber}/task.html`;
    } else {
        path = `./tasks/${chapterNumber}/${taskFullNumber}.html`;
    }
    const rawHtmlData = await taskFileRequest(path);
    let taskHtmlPage = parseText(rawHtmlData);
    taskHtmlPage = modifyHtml(taskHtmlPage, `/tasks/${chapterNumber}/`, taskFullNumber);
    return taskHtmlPage;
}

async function getJS(taskFullNumber) {
    let path = `./tasks/${taskFullNumber[0]}/`;
    const jsText = await taskFileRequest(`${path+taskFullNumber}.js`);
    return jsText;
}

function parseText(src) {
    const parser = new DOMParser();
    let srcText = parser.parseFromString(src, `text/html`);
    return srcText;
}

function modifyHtml(page, path, number) {
    let scriptObjects = page.getElementsByTagName("script");
    scriptObjects[1].src = `./${path}${number}.js`;
    return page;
}

function consoleToDiv (container) {
    window.addEventListener("message", (event) => {
        if (event.data && event.data.type === "console-log") {
            container.textContent += event.data.payload + `\n`;
        }
    })
}

function changeHeaderActiveButton(clickedButton) {
    const buttonId = clickedButton.id.split(" ");
    const number = buttonId[buttonId.length - 1];
    removeIsActiveClass(headerButtonsTopRank);
    headerButtonsTopRank[+number[0]].classList.add("isActive");
    if (number[2]) {
        createHeaderButtons(1, clickedButton);
        headerButtonsSecondRank[+number.split(".")[1] - 1].classList.add("isActive");
    }
    if (number[4]) {
        createHeaderButtons(2, clickedButton);
        headerButtonsThirdRank[+number.split(".")[2] - 1].classList.add("isActive");
    }
}

//common use create or modify functions
function createButtonsSet(chapterName, className, idName, parent, elementsCount) {
    for (let i = 0; i < elementsCount; i++) {
        createButton(`${chapterName}${i + 1}`, className, `${idName}${i + 1}`, parent);
    }
}

function createButton(buttonName, className, id, parent) {

    let button = createItem("div", className, id, parent);
    let paragraph = createItem("p", undefined, undefined, button);
    paragraph.textContent = buttonName;
    return button;
}

function createItem(tag, className, idName, parent) {
    let element = document.createElement(tag);
    if (className) {
        element.className = className;
    }
    if (idName) {
        element.id = idName;
    }
    if (parent) {
        parent.appendChild(element);
    }
    return element;
}

function clearInnerContent(parent) {
    parent.innerHTML = "";
}

//handlers
function headerButtonPressed(event) {
    let clickedButton = event.target.closest(".headerButton");
    if (!clickedButton) {
        clickedButton = event.target.closest(".headerSecondButton")
        if (!clickedButton) {
            clickedButton = event.target.closest(".headerThirdButton")
        }     
    }    

    let sameRowButtons = document.getElementsByClassName(clickedButton.classList);
    for (let i = 0; i < sameRowButtons.length; i++) {
        sameRowButtons[i].classList.remove("isActive")
    }
    clickedButton.classList.add("isActive");
}

function headerButtonClicked(event) {
    let clickedButton = event.target.closest(".headerButton");
    if (clickedButton) {
        if (clickedButton.id === "homeButton") {
            createHomePage();
            headerSecondCollapse();
            headerThirdCollapse();
            removeIsActiveClass(headerButtonsSecondRank);
            if (headerButtonsThirdRank) {
                removeIsActiveClass(headerButtonsThirdRank);
            }
        }    

        if (clickedButton.classList.contains("headerButton") && clickedButton.id != "homeButton") {
            headerSecondExpand();
            createHeaderButtons(1, clickedButton);
            clearInnerContent(headerThird);
            removeIsActiveClass(headerButtonsSecondRank);
            if (headerButtonsThirdRank) {
                removeIsActiveClass(headerButtonsThirdRank);
            }
            headerThirdCollapse();
        }
    } else {
        clickedButton = event.target.closest(".headerSecondButton")
        if (clickedButton) {
            headerThirdExpand();
            createHeaderButtons(2, clickedButton);
        } else {
            clickedButton = event.target.closest(".headerThirdButton");
            if (clickedButton) {
                createTaskPage(clickedButton);
            }
        }
    }
}

function taskPageButtonClicked(event) {
    let clickedButton;
    if (event.target.classList.contains("navButton")){
        clickedButton = event.target;
    } else {
        clickedButton = event.target.closest(".homePageTaskButton");
    }
    if (clickedButton) {
        createTaskPage(clickedButton);
        changeHeaderActiveButton(clickedButton);
    } 
}

function removeIsActiveClass(parent) {
    for (let i = 0; i < parent.length; i++) {
        parent[i].classList.remove("isActive");
    }    
}

//events
document.addEventListener('DOMContentLoaded', async () => {

    await manifestRequest()
    createHomePage();
    createHeaderButtons(0);
    headerAnimationWrapper();

    header.addEventListener("mousedown", headerButtonPressed);
    header.addEventListener("click", headerButtonClicked);
    mainContainer.addEventListener("click", taskPageButtonClicked);

})


