let grid = document.querySelector('.container')
let dimensionBtN = document.querySelector('#dimension-btn')

createBaseGrid()

dimensionBtN.addEventListener('click',changeDimension)

let resetBtn = document.querySelector('#reset-btn')



function createSquare(num){
    for(let i = 0; i < num; i++){
        square = document.createElement('div')
        square.classList.add('square')
        grid.appendChild(square)

    }
}

function targetAllSquare(squareDiv2){
    squareDiv2.forEach(element => {
        element.addEventListener('mouseover', function(){
           element.classList.add('background')
        })
    })
}

function changeDimension(){
    removeSquare()
    let userChoice = prompt("Enter a dimension (Between 1 and 100)")
    if(userChoice > 0 && userChoice < 100){
        gridNumber = userChoice * userChoice
    grid.style.gridTemplateColumns = `repeat(${userChoice}, 1fr)`
    grid.style.gridTemplateRows = `repeat(${userChoice}, 1fr)`
    createSquare(gridNumber)
    let squareDiv2 = document.querySelectorAll('.square')
    targetAllSquare(squareDiv2)
    }else{
        changeDimension()
    }
}

function createBaseGrid(){
    createSquare(256)
    let defaultGrid = document.querySelectorAll('.square')
    targetAllSquare(defaultGrid)
}

function removeSquare(){
    let squareToDel = document.querySelectorAll('.square')
    for(let i = 0; i < squareToDel.length; i++){
        squareToDel[i].remove()
    }
}

resetBtn.addEventListener('click', () => {
    location.reload()
})

