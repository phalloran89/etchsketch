function createBox () {
    const box = document.createElement('div');
    box.className = "box";
        return box;
}

function createMultipleBoxes () {
    const box = document.getElementById('#container');
        myBoxes = [],
        i = 0;
        numOfBoxes = 16;

        for (i; i < numOfBoxes; i++) {
            myBoxes.push(createBox());
            container.appendChild(myBoxes[i]);
        }
}

createMultipleBoxes();

