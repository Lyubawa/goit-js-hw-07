function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const inputNumber = document.querySelector("input");
const buttonCreate = document.querySelector("[data-create]");
const buttonDestroy = document.querySelector("[data-destroy]");
const newBoxes = document.querySelector("#boxes")

function createBoxes(amount) {
  let size = 30;
  const elements = [];
  for (let i = 0; i < amount; i ++) {
    const box = document.createElement("div");
    size += 10;

    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();

    elements.push(box);
  }
  newBoxes.append(...elements);
  }

function destroyBoxes() {
  newBoxes.innerHTML = "";
}

buttonCreate.addEventListener("click", () => {
  destroyBoxes();
  const amount = inputNumber.value;
  if (amount >= 1 && amount <= 100) {
  createBoxes(amount);}
    inputNumber.value = '';
})

buttonDestroy.addEventListener("click", () => {
  destroyBoxes();
  })