//const//
const boxes = document.getElementsByClassName("boxes")
const r = document.querySelector(':root');

//default index//
createBoxDefault(100)

//event listener for button//
document.getElementById("btn").addEventListener("click", createBox)

//box maker//
function createBox() {
    //reset boxes//
    boxes[0].replaceChildren();
    //get prompt//
    let userInput = prompt("How many boxes do you want on each side?");
    //calculate height and width values//
    let heightWidth = 1600 / userInput
    //change css variable for grid//
    r.style.setProperty('--cssGrid', `repeat(${userInput},1fr)`);
    //calculate the area of grid//
    gridArea = userInput * userInput
    //create box divs//
    for (i = 0; i < gridArea; i++) {
        let box = document.createElement("div")
        box.setAttribute("class", "box")
        //set box height and width//
        box.style.minHeight = `${heightWidth}px`
        box.style.minWidth = `${heightWidth}px`
        boxes[0].appendChild(box)
    }
    //event listener for paint//
    let box = document.getElementsByClassName("box")
    for (let i = 0; i < box.length; i++) {
        box[i].addEventListener("mouseover", function () {
            let randomColor = Math.floor(Math.random() * 16777215).toString(16);
            box[i].style.backgroundColor = `#${randomColor}`;
        })
    }
}

//seperate function for defualt index//
function createBoxDefault(userInput) {
    //reset boxes//
    boxes[0].replaceChildren();
    //calculate height and width values//
    let heightWidth = 1600 / userInput
    //change css variable for grid//
    r.style.setProperty('--cssGrid', `repeat(${userInput},1fr)`);
    //calculate the area of grid//
    gridArea = userInput * userInput
    //create box divs//
    for (i = 0; i < gridArea; i++) {
        let box = document.createElement("div")
        box.setAttribute("class", "box")
        //set box height and width//
        box.style.minHeight = `${heightWidth}px`
        box.style.minWidth = `${heightWidth}px`
        boxes[0].appendChild(box)
    }
    //event listener for paint//
    let box = document.getElementsByClassName("box")
    for (let i = 0; i < box.length; i++) {
        box[i].addEventListener("mouseover", function () {
            let randomColor = Math.floor(Math.random() * 16777215).toString(16);
            box[i].style.backgroundColor = `#${randomColor}`;
        })
}
}


