//Here we have all our variables and selectors
let barText = '';
let operator = 'Duck'; //At the beginning or after clicking the clear button 
                       //we put a nonsensical operator, to remind us of that
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
        //If the user has typed nothing, we assume he wants to work with 0.
        if (barText === ''){
            barText = 0;
        }

        //If it is the first time the user presses and operator, operator === Duck.
        if (operator === 'Duck'){
            resultNumber = Number(barText);
            operator = element.value;    
        }
        //If the user press = it is the final result.
        else if (element.value === '='){
            bar.textContent = operate(operator, resultNumber, Number(barText));
            operator = 'Duck';
            resultNumber = 0;
        }        
        //If it is not the first time, operator !== Duck
        else{
            resultNumber = operate(operator, resultNumber, Number(barText));
            bar.textContent = resultNumber;
            operator = element.value;
        }

        //We change barText so we can rewrite the results or the inputs on screen.
        barText = '';
    })
});


//This part clears our screen.
clearButton.addEventListener('click', () => {
    operator = 'Duck';
    barText = '';
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

