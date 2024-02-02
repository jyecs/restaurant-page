
const test = () => {
    console.log("hello!");
}

const newDiv = () => {
    const element = document.createElement("div");
    element.innerHTML = "this works too!";
    return element;
}

export { test, newDiv }; 