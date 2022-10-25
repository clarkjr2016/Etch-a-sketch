const container = document.querySelector(".container");

for (i = 0; i <= 15; i++) {
    let item = document.createElement("div");
    item.setAttribute("class", "child");
    container.append(item);
}

let grids = document.querySelectorAll(".child");

grids.forEach(grid => grid.addEventListener("mouseover", (e) => {
    e.target.style.backgroundColor = "red";
}));

