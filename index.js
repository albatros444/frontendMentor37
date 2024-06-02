const humburgerButton = document.querySelector(".humburgerButton");
const closeButton = document.querySelector(".closeButton");
const humburgerMenu = document.querySelector(".humburgerMenu");
const body = document.querySelector("body");

humburgerButton.addEventListener("click", () => {
  humburgerButton.style.opacity = "0";
  humburgerButton.style.zIndex = "-5";
  closeButton.style.opacity = "1";
  closeButton.style.zIndex = "5";
  humburgerMenu.style.transform = "translate(0%)";
  body.style.overflow = "hidden";
});
closeButton.addEventListener("click", () => {
  closeButton.style.opacity = "0";
  closeButton.style.zIndex = "-5";
  humburgerButton.style.opacity = "1";
  humburgerButton.style.zIndex = "5";
  humburgerMenu.style.transform = "translate(100%)";
  body.style.overflow = "scroll";
});
