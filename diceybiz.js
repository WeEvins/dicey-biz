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



class Die {
    constructor(){
        this.div = document.createElement('div');
        this.div.classList.add('d6');

    }

    giveRoll(){
        let roll = `${randVal(1,6)}`

    }
}


function randVal(min,max) {
    return Math.floor(Math.random() * (max - min)) + min;
}