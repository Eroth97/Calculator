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

let barText = '';
let bar = document.querySelector('.bar');
let numberButtons = document.querySelectorAll('.number');

numberButtons.forEach( (element) =>{
    element.addEventListener('click', () =>{
        barText = barText + element.value;
        bar.textContent = barText;
    });
}
)

let operatorButtons = document.querySelectorAll('.operator');

operatorButtons.forEach( (element) => {
    element.addEventListener('click', () => {
        barText = barText + ' ' + element.value + ' ';
        bar.textContent = barText;
    })
});
