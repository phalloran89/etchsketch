document.addEventListener('DOMContentLoaded', () => {
    numOfBoxes = 
    prompt("Welcome to Etch-A-Sketch. How big would you like your grid?");
    createSketch(numOfBoxes);
})

const titleContainer = document.createElement('div');
titleContainer.setAttribute('id', 'titleContainer');
document.body.insertBefore(titleContainer, 
    document.getElementById('container'));

document.querySelector('titleContainer');
const mainTitle = document.createElement('h1');
mainTitle.setAttribute('id','mainTitle');
mainTitle.textContent = "Etch-A-Sketch!";
titleContainer.appendChild(mainTitle);

const resetButton = document.createElement('button');
resetButton.setAttribute('id','resetButton');
resetButton.textContent = "Reset";
titleContainer.appendChild(resetButton)

resetButton.addEventListener('click', resetPrompt);

function resetPrompt() {
    clearSketch();
    numOfBoxes = 
    prompt("How big would you like your grid? Please enter a number.");
    createSketch(numOfBoxes);
};

function clearSketch() {
    document.querySelectorAll('.box').forEach(e => e.remove());
}

function createSketch(numOfBoxes) {

    function createMultipleBoxes(numOfBoxes) {

        function createBox (numOfBoxes) {
            const box = document.createElement('div');
            box.className = "box";
            box.setAttribute('id','box' + (i + 1));
                return box;
        }

        const box = document.getElementById('#container');
            myBoxes = [],
            i = 0;
            for (i; i < (numOfBoxes*numOfBoxes); i++) {
                myBoxes.push(createBox(numOfBoxes));
                container.appendChild(myBoxes[i]);
            }
    }

    createMultipleBoxes(numOfBoxes);

    function boxEventListener(numOfBoxes) {
        for (let i = 1; i <= (numOfBoxes*numOfBoxes); i++) {
            let box = document.getElementById('box' + i);
            box.addEventListener('mousemove', () => {
                box.style.backgroundColor = `black`;
            })
        }
    }

    boxEventListener(numOfBoxes);

    function adjustBoxSize(numOfBoxes) {

        const containerSize = 720;
        const boxSize = containerSize / numOfBoxes;

        const boxes = document.getElementsByClassName('box');

        for (let i = 0; i < boxes.length; i++) {
            boxes[i].style.width = `${boxSize}px`;
            boxes[i].style.height = `${boxSize}px`;
        }
    }
    
    adjustBoxSize(numOfBoxes);
}

