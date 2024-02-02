import "./style.css";
import { test, newDiv } from "./newscript";

const buildContainer = () => {
    const element = document.createElement("div");
    element.classList.add("container");
    element.classList.add("padding-10x");
    return element;
};

const buildGenericContent = (...content) => {
    const container = buildContainer();
    content.forEach((text) => {
        const p = document.createElement("p");
        p.classList.add("text-content");
        p.innerHTML = text;
        container.appendChild(p);
    });

    return container;
};

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", () =>{
        console.log("clicked");
    });
});

const contentDiv = document.querySelector("#content");
const content1 = buildGenericContent("test1", "test2", "test3");
const content2 = buildGenericContent("hello", "goodbye", "yes!");
test();
contentDiv.replaceChildren(content1, content2);
contentDiv.appendChild(newDiv());
