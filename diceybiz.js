//EXTRA: create sumdice function w/ trigger button to add all current face value of dice; displays alert
//clicking on a dice on the page cause just that one die to update face value
//double clicking a die removes is from the page. sumdice event must reflect this. (remove from screen, and array basically)

const container = document.getElementById('dice-container');
class Die {
    constructor() {
        this.value = 1;
        this.div = document.createElement('div'); 

        this.div.classList = 'd6';
        container.appendChild(this.div);
        this.roll();
    };

    roll() {
        this.value = Math.floor(Math.random() * (7 - 1)) + 1;
        this.div.innerText = this.value; 
    };
};

document.addEventListener('DOMContentLoaded', () => {
    let diceArray = [];
    let btnAddDie = document.createElement('button');
    let btnRollAll = document.createElement('button');

    btnAddDie.innerText = 'Add D6';
    btnAddDie.className = 'btnAddDie';
    container.appendChild(btnAddDie);

    btnRollAll.innerText = 'ReRoll!';
    btnRollAll.className = 'btnRollAll';
    container.appendChild(btnRollAll);

    btnAddDie.addEventListener('click', () => {
        let newDie = new Die();
        diceArray.push(newDie);
    });

    btnRollAll.addEventListener('click', () => {
        for (let i = 0; i < diceArray.length; i++) {
            const currentDie = diceArray[i];
            currentDie.roll();
        }
    });
});