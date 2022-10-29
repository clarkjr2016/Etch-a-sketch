const container = document.querySelector(".container");




const prompt = document.createElement("button");
prompt.innerHTML = "Select Me";

const finalPrompt = container.appendChild(prompt);

const grid = container.appendChild(document.createElement("div"));

grid.classList.add("grid");

let gridSizeLength = getComputedStyle(grid).getPropertyValue("--length");
let gridSizeWidth = getComputedStyle(grid).getPropertyValue("--width");



finalPrompt.addEventListener("click", () => {
    let input = window.prompt ("What's the grid size");
    gridSizeLength = input;
    gridSizeWidth = input;
    
    for (i=1; i <= input; i++) {
        const gridItem = grid.appendChild(document.createElement("div"))
        gridItem.classList.add("grid-item");
        gridItem.innerHTML = input;
    }   

})



/* create an onclick event that takes a prompt and uses that number to create the amount of grids 




/* for (i = 0; i <= 15; i++) {
    let item = document.createElement("div");
    item.setAttribute("class", "child");
    container.append(item);
}

let grids = document.querySelectorAll(".child");

grids.forEach(grid => grid.addEventListener("mouseover", (e) => {
    e.target.style.backgroundColor = "red";
})); */

