function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return false
    } else {
        return a / b;
    }
}

function operate(operator, a, b) {
    switch (operator) {
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case '*':
            return multiply(a, b); 
        case '/':
            return divide(a, b);
        default:
            throw new Error(`Unsupported operator: ${operator}`);
    }
}


document.addEventListener('DOMContentLoaded', () => {
let displayValue = '0';
let firstNumber = null; // Store the first number
let chosenOperator = null; // Store the chosen operator

function updateDisplay() {
    const displayElement = document.querySelector('.display');
    displayElement.textContent = displayValue;
}

function handleNumberClick(event) {
    const number = event.target.textContent;
    if (displayValue === '0') {
        displayValue = number;
    } else {
        displayValue += number;
    }
    updateDisplay();
}

function handleOperatorClick(event) {
    // Save the first number and chosen operator
    if (chosenOperator !== null) {
      const secondNumber = parseFloat(displayValue);
      currentResult = operate(chosenOperator, firstNumber, secondNumber);
      displayValue = currentResult.toString();
    } else {
      currentResult = parseFloat(displayValue);
    }

    chosenOperator = event.target.textContent;
    firstNumber = currentResult;
    displayValue = '0';
    updateDisplay();
  }

function handleEqualsClick() {
    const secondNumber = parseFloat(displayValue);
    if (chosenOperator !== null) {
      displayValue = operate(chosenOperator, firstNumber, secondNumber).toString();
      updateDisplay();
      // Reset the first number and chosen operator after the calculation
      firstNumber = null;
      chosenOperator = null;
    }
  }


const numberButtons = document.querySelectorAll('.number');
numberButtons.forEach(button => {
    button.addEventListener("click", handleNumberClick);
})


const operatorButtons = document.querySelectorAll(".operator");
operatorButtons.forEach(button => {
   button.addEventListener("click", handleOperatorClick);
});


const equalsButton = document.querySelector(".equals");
equalsButton.addEventListener("click", handleEqualsClick);


const clearButton = document.querySelector('.clear');
clearButton.addEventListener('click', () => {
    displayValue = '0';
    firstNumber = null;
    chosenOperator = null;
    currentResult = null;
    updateDisplay();
})
})