let display = document.querySelector(".calculator_display");
// Select all operation elements
// querySelectorAll(attribute1, attribute2,...) - returns a nodeList of all elements with a specific tag/attribute
let operations = document.querySelectorAll("[data-operation]");
// Select all number elements
let numbers = document.querySelectorAll("[data-number]");
let equalButton = document.querySelector("[data-equals]");
let clearButton = document.querySelector("[data-clear]");
let decimalButton = document.querySelector("[data-decimal]");
let deleteButton = document.querySelector("[data-delete]");

// The target event property returns the element that triggered the event.
let num1 = '';
let op = '';
let num2 = '';
let currButtonPressed = null;
let decimalPressed = null;

// forEach is a function that is like a loop and loops over all numbers and runs the code for each iteration
numbers.forEach(button => 
    button.addEventListener("click", e => {
            if (op === ''){  
                num1 += e.target.innerHTML;
                currButtonPressed = 'num1';
            } 
            else {
                num2 += e.target.innerHTML;
                currButtonPressed = 'num2';
            }
            display.textContent += e.target.innerHTML;
        }
    )
)

operations.forEach(operation => 
    operation.addEventListener("click", e => {
        if (num1 != '' && op === ''){
            display.textContent += e.target.innerHTML;
            op = e.target.innerHTML;
            currButtonPressed = 'operator';
        }
    })
)
equalButton.addEventListener("click", e => {
    if (num1 != '' && num2 != ''){
        if (op === '+'){
            result = Number(num1) + Number(num2);
        }
        else if (op === '-'){
            result = Number(num1) - Number(num2);
        }
        else if (op === ('*')){
            result = Number(num1) * Number(num2);
        }
        else if (op === '÷'){
            result = Number(num1) / Number(num2);
        }
    display.textContent = result;
    }
})

clearButton.addEventListener("click", e => {
    display.textContent = '';
    num1 = '';
    op = '';
    num2 = '';
    currButtonPressed = '';
    decimalPressed = '';
})

decimalButton.addEventListener("click", e => {
    display.textContent += e.target.innerHTML;
    decimalPressed = 'decimal';
})

// TODO: Double Check calculation logic and all cases
deleteButton.addEventListener("click", e => {
    if (currButtonPressed === 'num1'){
        num1 = num1.slice(0,-1);
        display.textContent = display.textContent.slice(0,-1);
    }
    else if (currButtonPressed === 'num2'){
        num2 = num2.slice(0,-1);
        display.textContent = display.textContent.slice(0,-1);
    }
    else if (currButtonPressed === 'operator'){
        op = null;
        display.textContent = display.textContent.slice(0,-1);
    }
})



