"use strict"

const userForm = document.querySelector(".login-form");

const user = {};

userForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const emailInput = userForm.elements.email.value.trim();
    const passwordInput = userForm.elements.password.value.trim();

    if (!emailInput || !passwordInput) {
        alert(`All form fields must be filled in`);
        return;
    };


const data = new FormData(event.target);
    data.forEach((value, key) => {
        user[key] = value;
    })
    console.log(user);
    userForm.reset();
    })