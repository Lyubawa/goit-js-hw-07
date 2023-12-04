function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const buttonChangeColor = document.querySelector(".change-color");
const widgetColor = document.querySelector(".widget");
const newColor = document.querySelector(".color");

buttonChangeColor.addEventListener("click", () => {
  const changeColor = widgetColor.style.backgroundColor = getRandomHexColor();
  newColor.innerHTML = changeColor;
  console.log(buttonChangeColor);
})