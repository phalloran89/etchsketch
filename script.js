document.addEventListener('DOMContentLoaded', () => {
    let numOfBoxes;
    while (true) {
        numOfBoxes = prompt(`Welcome to Etch-A-Sketch.`
        + ` How big would you like your grid?` + ` Please enter a number` + 
        ` between 1 and 100.`);
        if (numOfBoxes === null) {
            return; 
        }

        if (isNaN(numOfBoxes)) {
            alert("That is not a number, please try again.");
        } else if (numOfBoxes > 100) {
            alert("Sorry, 100 is the maximum grid size supported.");
        } else {
            break; 
        }
    }
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
    let numOfBoxes;
    while (true) {
        numOfBoxes = prompt(`How big would you like your grid?` 
        + ` Please enter a number between 1 and 100.`);
        if (numOfBoxes === null) {
            return; 
        }

        if (isNaN(numOfBoxes)) {
            alert("That is not a number, please try again.");
        } else if (numOfBoxes > 100) {
            alert("Sorry, 100 is the maximum grid size supported.");
        } else {
            break; 
        }
    }
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
            box.setAttribute('data-shade', '1');
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

    function computeShade(currentShade) {
        let red;
        let green;
        let blue;

        red = 255 - (25.5 * (currentShade));
        green = 255 - (25.5 * (currentShade));
        blue = 255 - (25.5 * (currentShade));
        
        let shade = [red, green, blue];

        return shade;
    }

    function boxEventListener(numOfBoxes) {
        for (let i = 1; i <= (numOfBoxes*numOfBoxes); i++) {
            let box = document.getElementById('box' + i);
            box.addEventListener('mouseover', () => {
                currentShade = +e.target.getAttribute('data-shade');
                let shade = computeShade(currentShade);
                e.target.setAttribute('data-shade',`${currentShade} + 1`);
                box.style.backgroundColor = `rgb(${shade[0]}, ${shade[1]},
                    ${shade[2]})`;            
            
        });
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
}

// function randomNum(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// }

// function boxEventListener(numOfBoxes) {
//     for (let i = 1; i <= (numOfBoxes*numOfBoxes); i++) {
//         let box = document.getElementById('box' + i);
//         let r = randomNum(1, 255);
//         let g = randomNum(1, 255);
//         let b = randomNum(1, 255);
//         box.addEventListener('mousemove', () => {
//             box.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
//         })
//     }
// }

