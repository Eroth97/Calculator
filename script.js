//Here we have all our variables and selectors
let barText = '';
let displayNumber = 0;
let resultNumber = 0;
let bar = document.querySelector('.bar');
let numberButtons = document.querySelectorAll('.number');
let operatorButtons = document.querySelectorAll('.operator');
let clearButton = document.getElementById('clear');


//Here we add an event listener to our number buttons
//so that they can populate the bar.
numberButtons.forEach( (element) =>{
    element.addEventListener('click', () =>{
        barText = barText + element.value;
        bar.textContent = barText;
    });
}
)


//This parte will save the values and print the desired value
operatorButtons.forEach( (element) => {
    element.addEventListener('click', () => {
        //When an operator is clicked, the displayNumber changes its value to the displayed value.
        barText = barText + ' ' + element.value + ' ';
        bar.textContent = barText; //This code will be gone!

        //Then displayValue and resultNumber are operated with the element.value.

        //Change the resultNumber to the new result and change the DOM.
    })
});


//This part clears our screen.
clearButton.addEventListener('click', () => {
    barText = '';
    //Provisional.
    bar.textContent = '0';
})


//Our functions to make basic operations.
function sum(n1, n2){
    return n1 + n2;
}

function subtract(n1, n2){
    return n1 - n2;
}

function multiply(n1, n2){
    return n1*n2;
}

function divide(n1, n2){
    return n2 === 0? 'Syntax Error': n1/n2;
}

function operate(operator, n1, n2){
    if (operator === '+'){
        return sum(n1, n2);
    } else if(operator === '-'){
        return subtract(n1, n2);
    }
    else if(operator === '*'){
        return multiply(n1, n2);
    }
    else if(operator === '/'){
        return divide(n1, n2);
    }
}

