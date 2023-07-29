function add(a, b) {
    return a + b;
}
console.log(add(3, 5))

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
console.log(divide(5, 3))

let firstNumber = a;
let operator = ('+', '-', '*', '/');
let lastNumber = b;

function operate(operator, a, b) {
    switch (operate) {
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
