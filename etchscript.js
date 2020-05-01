//etch_a_sketch script
const container = document.querySelector('.container');
const button = document.querySelector('.reset')
button.addEventListener('click', e => {
    let randomSquares = () => Math.floor(Math.random()*100);
    let squares = prompt("How many squares per side would you like the next grid?\nPick a number between 1 and 150", randomSquares())
    createGrid(squares);
})

function createGrid(rows) {
    container.innerHTML = '';
    if (rows < 1 || rows > 150) rows = 10;
    let columns = rows, size = 960/rows + "px";
    for (let i = 1; i <=columns; i++) {
        const divColumn = document.createElement('div');
        divColumn.setAttribute('id', 'column');
        for (let j = 1; j<=rows; j++){
            const thisDiv = divColumn;
            const divRow = document.createElement('div');
            divRow.setAttribute('id', 'row')
            divRow.setAttribute('style', `height: ${size}; width: ${size}`);
            divRow.style.background = "rgba(255, 255, 255)";
            divRow.style.opacity = "0.1";
            thisDiv.appendChild(divRow);
        }
        container.appendChild(divColumn);
    }
    mouseDraw(randomColorPicker());
}
function randomColorPicker() {
    let randomRGB = () => Math.floor(Math.random()*255)
    let result = `rgb(${randomRGB()}, ${randomRGB()}, ${randomRGB()})`;
    return result;
}
function mouseDraw(color) {
    const rowArr = document.querySelectorAll('#row')
    rowArr.forEach(rowBlock => {
        rowBlock.addEventListener('mouseenter', e => {
            let opacity = rowBlock.style.opacity;
            if (opacity < 1) rowBlock.style.opacity = parseFloat(opacity) + 0.1;
            rowBlock.style.background = color;
        })
    }) 
}
createGrid(10);