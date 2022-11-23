const container = document.querySelector(".container"); // container for buttons and grid
const buttonContainer = container.appendChild(document.createElement("div")); // Container for buttons
const gridContainer = container.appendChild(document.createElement("div")); // Container for grid
const button = buttonContainer.appendChild(document.createElement("button")); // grid button
const clear = buttonContainer.appendChild(document.createElement("button")); // clear button

gridContainer.classList.add("grid-container"); // adding a class to the grid container so that I can add the squares to the grid container

button.innerText = "Grid Size"
clear.innerText =  "Clear"

button.addEventListener("click", () => {
  const input = prompt("Select a size that you want your grid to be"); // this is the input and the number that determines how many rows and columns there will be.
  gridContainer.style.gridTemplateColumns = `repeat(${input}, 1fr)`; // this is to create columns based off user input
  gridContainer.style.gridTemplateRows =`repeat(${input}, 1fr)`; // this is to create rows based off user input

  function clearGrid() {
    gridContainer.innerHTML = ""

    };


  for (i = 0; i < input * input; i++) {
  const gridItem = document.createElement("div")
  ;
gridItem.classList.add("grid-item");
gridContainer.appendChild(gridItem);


gridItem.addEventListener("mouseover", () => {
  gridItem.style.backgroundColor = "grey";
})

clear.addEventListener("click", clearGrid);

}



})






