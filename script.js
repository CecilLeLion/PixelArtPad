const gridSize = document.getElementById('myRange')
const sizeDisplay = document.getElementById('gridText')
const drawPad = document.getElementById('drawpad')
const grid = document.createElement('div');

//Create base grid
createGrid()

//Takes the input of the slider to determine the grid size
//Also displays grid size above slider
gridSize.oninput = function() {
    sizeDisplay.innerHTML = `Grid Size: ${this.value} x ${this.value}`;
    sizeDisplay.style.fontSize = '10px'
    //first removes previous grid before generating new one
    removeGrid();
    createGrid();
}
//Displays default grid size upon page startup
sizeDisplay.textContent = `Grid Size: ${gridSize.value} x ${gridSize.value}`;
sizeDisplay.style.fontSize = '10px'

//function to create the grid
function createGrid() {
    for (let i=0; i < gridSize.value ** 2; i++) {
        const grid = document.createElement('div');
        grid.classList.add('gridBlock');
        grid.style.width = (`${(400/gridSize.value)-2}px`);
        grid.style.height = (`${(400/gridSize.value)-2}px`);
        drawPad.appendChild(grid);
    }
}

//function to remove grid
function removeGrid() {
    drawPad.innerHTML = '';
}
