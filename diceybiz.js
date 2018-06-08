//objectives: 
//create class 'die'
//class has property 'value'
//class has method 'roll' that generates randomly 1-6, sets the 'value' property, and updates div with new value
//page must contain button labled 'generate die'
//clicking button must create new die object (creats new div, labled 1-6)
//dice show up as a grid - see DOM DOM DOM lab
//page need second button 'roll dice' that calls 'roll' on all generated dice to update their value

//EXTRA: create sumdice function w/ trigger button to add all current face value of dice; displays alert
//clicking on a dice on the page cause just that one die to update face value
//double clicking a die removes is from the page. sumdice event must reflect this. (remove from screen, and array basically)

container = document.getElementById('dice-container');

class Die {
    constructor() {
        this.div = document.createElement('div'); //this line should create the dice div itself
        this.div.innerText = `${randVal}`; //this line should have the dice display its face value
        this.div.classList = 'd6'; //this line should give the div a class of 'd6'
        // this.div.style.left = `${x}px`;
        // this.dive.style.top = `${y}px`
        this.randVal()
        container.appendChild(this.div);
    };
    
    randVal(min, max) {
        let faceVal = 
        return Math.floor(Math.random() * (max - min)) + min;
    };


function makeDie() {
    let d6die = new Die()
}



// };

// document.addEventListener('DOMContentLoaded', function () {



//     let btnAddDie = document.createElement('button');
//     // btnAddSquare.innerText = 'Add D6';
//     // btnAddSquare.className = 'btnAddDie'
//     document.body.appendChild(btnAddDie);



// });