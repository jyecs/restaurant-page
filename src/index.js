const buildContainer = () => {
    const element = document.createElement("div");
    element.classList.add("container");
    element.classList.add("padding-10x")
    return element;
};

const buildContent = (...content) => {
    const container = buildContainer();
    content.forEach(text => {
        const p = document.createElement("p");
        p.classList.add("text-content");
        p.innerHTML = text;
        container.appendChild(p);
    });

    return container;
}


let contentDiv = document.querySelector("#content");
contentDiv.appendChild(buildContent("hello", "goodbye", "yes!"));