let numOfBoxes = 100;

const titleContainer = document.createElement('div');
titleContainer.setAttribute('id', 'titleContainer');
document.body.insertBefore(titleContainer, 
    document.getElementById('container'));

document.querySelector('titleContainer');
const mainTitle = document.createElement('h1');
mainTitle.setAttribute('id','mainTitle');
mainTitle.textContent = "Etch-A-Sketch!";
titleContainer.appendChild(mainTitle);

function createMultipleBoxes (numOfBoxes) {

    function createBox (numOfBoxes) {
        const box = document.createElement('div');
        box.className = "box";
        box.setAttribute('id','box' + (i + 1));
            return box;
    }

    const box = document.getElementById('#container');
        myBoxes = [],
        i = 0;
        for (i; i < numOfBoxes; i++) {
            myBoxes.push(createBox(numOfBoxes));
            container.appendChild(myBoxes[i]);
        }
}

createMultipleBoxes(numOfBoxes);

function boxEventListener(numOfBoxes) {
    for (let i = 1; i <= numOfBoxes; i++) {
        let box = document.getElementById('box' + i);
        box.addEventListener('mousemove', () => {
            box.style.backgroundColor = `black`;
        })
    }
};

boxEventListener(numOfBoxes);
