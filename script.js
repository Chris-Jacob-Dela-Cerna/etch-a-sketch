

const bodyTag = document.querySelector("body");
const themeSwitch = document.querySelector(".theme-switch");
const themeIcon = document.getElementById("theme-icon")
const themeInfo = document.getElementById("theme-info")

themeSwitch.addEventListener("click", function() {
  bodyTag.classList.toggle("dark")
  bodyTag.classList.toggle("light")
  if (bodyTag.classList.contains("dark")) {
    themeSwitch.appendChild(themeInfo)
    themeSwitch.style["padding"] = "4px 12px 4px 8px"
    themeIcon.setAttribute("src", "img/dark_mode_icon.png")
    themeInfo.textContent = "Dark"
  } else {
    themeSwitch.appendChild(themeIcon)
    themeSwitch.style["padding"] = "4px 8px 4px 12px"
    themeIcon.setAttribute("src", "img/light_mode_icon.png")
    themeInfo.textContent = "Light"
  }
});