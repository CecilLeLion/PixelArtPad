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
let numOfBlocks = (gridSize.value **2)

//function to remove grid
function removeGrid() {
    drawPad.innerHTML = '';
}

//Functionality to button for hiding grid lines
const hideGridBtn = document.querySelector('#hideGridLines')

hideGridBtn.addEventListener('click', hideGridLine)
 
function hideGridLine() {
    let len = document.getElementsByClassName('gridBlock');
    let i;
    for (i = 0; i < len.length; i++) {
        len[i].style.borderColor = 'transparent'
    }
}

//Functionality to button for showing grid lines
const showGridBtn = document.querySelector('#showGridLines')

showGridBtn.addEventListener('click', showGridLine)

function showGridLine() {
    let len = document.getElementsByClassName('gridBlock');
    let i
    for (i=0; i<len.length; i++) {
        len[i].style.borderColor = 'rgba(0, 0, 0, 0.363)' 
        len[i].style.backgroundColor = 'grey'
    }
}

//Functionality to clear button
const clearBtn = document.querySelector('#clearContent')

clearBtn.addEventListener('click', resetGrid);

function resetGrid() {
    removeGrid();
    createGrid();
}