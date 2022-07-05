const gridSize = document.getElementById('myRange')
const sizeDisplay = document.getElementById('gridText')
const drawPad = document.getElementById('drawpad')
const grid = document.createElement('div');
let currentMode = 'color'

// Button functionality
const eraser = document.querySelector('#eraser')
const color = document.querySelector('#color')
const hideGridBtn = document.querySelector('#hideGridLines')
const showGridBtn = document.querySelector('#showGridLines')
const clearBtn = document.querySelector('#clearContent')

//Create base grid
createGrid()

//Takes the input of the slider to determine the grid size
//Also displays grid size above slider
gridSize.oninput = function() {
    sizeDisplay.innerHTML = `Grid Size: ${this.value} x ${this.value}`;
    sizeDisplay.style.fontSize = '14px'
    //first removes previous grid before generating new one
    removeGrid();
    createGrid();
}

//Displays default grid size upon page startup
sizeDisplay.textContent = `Grid Size: ${gridSize.value} x ${gridSize.value}`;
sizeDisplay.style.fontSize = '14px'

//function to create the grid
function createGrid() {
    for (let i=0; i < gridSize.value ** 2; i++) {
        const grid = document.createElement('div');
        grid.classList.add('gridBlock');
        grid.style.width = (`${(600/gridSize.value)-2}px`);
        grid.style.height = (`${(600/gridSize.value)-2}px`);
        drawPad.appendChild(grid);
    }
}
let numOfBlocks = (gridSize.value **2)

//function to remove grid
function removeGrid() {
    drawPad.innerHTML = '';
}

//Hide grid lines when button is clicked
hideGridBtn.addEventListener('click', hideGridLine)
 
function hideGridLine() {
    let len = document.getElementsByClassName('gridBlock');
    let i;
    for (i = 0; i < len.length; i++) {
        len[i].style.borderColor = 'transparent'
    }
}

//Show grid lines when button is clicked
showGridBtn.addEventListener('click', showGridLine)

function showGridLine() {
    let len = document.getElementsByClassName('gridBlock');
    let i
    for (i=0; i<len.length; i++) {
        len[i].style.borderColor = 'rgba(0, 0, 0, 0.363)' 
    }
}

//Clear grid when button is clicked
clearBtn.addEventListener('click', resetGrid);

function resetGrid() {
    removeGrid();
    createGrid();
}

//Change background color of grid block
const gridBlock = document.getElementsByClassName('gridBlock');
//Changes targets background color based on color picker choice
//Or erases block clicked
function respondToClick(e) {
    const colorChoice = document.getElementById('colorSelect').value;
    if (currentMode === 'eraser') {
        e.target.style.backgroundColor = 'rgba(245, 222, 179, 0.507)'
    } else if (currentMode === 'color') {
        e.target.style.backgroundColor = colorChoice
    }
}
//When an item within drawpad is clicked
//Respond to click function is used
drawPad.addEventListener('mousedown', respondToClick)

//When eraser or color is clicked activate setCurrentMode function
eraser.onclick = () => setCurrentMode('eraser')
color.onclick = () => setCurrentMode('color')

//Function sets the color mode from eraser or color depending on button clicked
function setCurrentMode(mode) {
    activateButton(mode);
    currentMode = mode
}

//Function which actually activates the buttons
function activateButton(mode) {
    if (currentMode === 'color') {
        eraser.classList.remove('active');
    } else if (currentMode === 'eraser') {
        color.classList.remove('active');
    }
    if (mode = 'color') {
        color.classList.add('active');
    } else if (mode = 'eraser') {
        eraser.classList.add('active')
    }
}