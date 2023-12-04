"use strict"

const listElements = document.querySelectorAll(".item");

console.log(`Number of categories: ${listElements.length}`);
listElements.forEach((element) => {
    const listElement = element.querySelector(`h2`).textContent;
    console.log(`Category: ${listElement}`);
    const listItems = element.querySelectorAll(`li`);
    console.log(`Elements: ${listItems.length}`);
});



