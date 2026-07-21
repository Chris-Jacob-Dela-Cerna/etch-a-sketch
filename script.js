//  ---  DOM References  ---

const bodyTag = document.querySelector("body");
const canvas = document.querySelector(".canvas");
const currentCanvasSize = document.getElementById("current-canvas-size")
const inputCanvasSize = document.getElementById("canvas-size");
const themeIcon = document.getElementById("theme-icon");
const themeInfo = document.getElementById("theme-info");
const themeSwitch = document.querySelector(".theme-switch");



//  ---  Configuration  ---

const defaultGridSize = 16;
const maxGridSize = 100;

let gridSize = defaultGridSize;
let useEraser = true;
let usePencil = true;



//  ---  Page Theme  ---

themeSwitch.addEventListener("click", function() {
  bodyTag.classList.toggle("dark");
  bodyTag.classList.toggle("light");
  if (bodyTag.classList.contains("dark")) {
    themeSwitch.appendChild(themeInfo);
    themeSwitch.style["padding"] = "4px 12px 4px 8px";
    themeIcon.setAttribute("src", "img/dark_theme_icon.png");
    themeInfo.textContent = "Dark";
  } else {
    themeSwitch.appendChild(themeIcon);
    themeSwitch.style["padding"] = "4px 8px 4px 12px";
    themeIcon.setAttribute("src", "img/light_theme_icon.png");
    themeInfo.textContent = "Light";
  };
});



//  ---  Canvas  ---

function renderCanvas(gridSize) {
  currentCanvasSize.textContent = `Current = ${gridSize}`;
  canvas.replaceChildren();

  const totalSquares = gridSize * gridSize;
  const gridRatio = 100 / gridSize;

  for (let i = 0; i < totalSquares; i++) {
    const square = document.createElement("div");
    square.style["flex"] = `1 1 ${gridRatio}%`;
    canvas.appendChild(square);
  };
}



//  --- Toolbox  ---

const pen = document.getElementById("pen");
pen.addEventListener("click", (event) => {
  if (usePencil === false) {
    usePencil = true;
    useEraser = false;
  } else {
    usePencil = false;
  }
  console.log("\nAfter:  " + usePencil)
  console.log("After:  " + useEraser)
});



//  --- Color Palette ---



//  ---  Canvas Settings  ---

inputCanvasSize.addEventListener("keydown", (event) => {
  if (event.key !== "Enter") return;

  const userInput = inputCanvasSize.value.trim();
  if (userInput === "") return;

  const sizeInput = Number(userInput)
  if (!Number.isInteger(sizeInput) || sizeInput < 1 || sizeInput > maxGridSize) return;

  inputCanvasSize.value = "";
  gridSize = sizeInput;
  renderCanvas(gridSize);
});



//  ---  Initialization  ---

renderCanvas(gridSize);