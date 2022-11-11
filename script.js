const container = document.querySelector(".container");
const buttonContainer = container.appendChild(document.createElement("div"));
const gridContainer = container.appendChild(document.createElement("div"));
const button = buttonContainer.appendChild(document.createElement("button"));
const clear = buttonContainer.appendChild(document.createElement("button"))

clear.innerText = "Clear"
gridContainer.classList.add("grid-container");

button.innerText = "8 X 8"


button.addEventListener("click", () => {
    
    for (i = 1; i <= 256; i++) {    
    let grid = gridContainer.appendChild(document.createElement("div"));
    grid.classList.add("grid-item");

    grid.addEventListener("mouseenter", () => {
        grid.style.backgroundColor = "blue";
    })
    
}


})

clear.addEventListener("click", () =>  {
    const childNodes = gridContainer.childNodes;

    childNodes.forEach((node) => {
        node.style.backgroundColor = "white";

    })
})





