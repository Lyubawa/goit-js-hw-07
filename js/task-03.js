"use script"

const userNameInput = document.querySelector("#name-input");
const userNameOutput = document.querySelector("#name-output");

userNameInput.addEventListener("input", () => {
    const userName = userNameInput.value.trim();
    userNameOutput.innerHTML = userName;
    userNameOutput.textContent = userName === "" ? "Anonymous" : userName;
})
   