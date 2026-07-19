

const bodyTag = document.querySelector("body");
const themeSwitch = document.querySelector(".theme-switch");
const themeIcon = document.getElementById("theme-icon")

themeSwitch.addEventListener("click", function() {
  bodyTag.classList.toggle("dark")
  bodyTag.classList.toggle("light")
  if (bodyTag.classList.contains("dark")) {
    themeIcon.setAttribute("src", "img/dark_mode_icon.png")
  } else {
    themeIcon.setAttribute("src", "img/light_mode_icon.png")
  }
});