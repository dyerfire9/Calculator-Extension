let display = document.querySelector(".calculator_display");
// Select all operation elements
let operations = document.querySelectorAll("[data-operation]");
// Select all number elements
let numbers = document.querySelectorAll("[data-number]");
let equalButton = document.querySelector("[data-equals]");
let clearButton = document.querySelector("[data-clear]");
let decimalButton = document.querySelector("[data-decimal]");
let deleteButton = document.querySelector("[data-delete]");

// The target event property returns the element that triggered the event.
let num1 = null;
let op = null;
let num2 = null;
numbers.forEach(button => 
    button.addEventListener("click", e => {
            if (num1 === null){  
                num1 = e.target.innerHTML;
            } 
            else{
                num2 = e.target.innerHTML;
            }
            display.textContent += e.target.innerHTML;
        }
    )
)

operations.forEach(operation => 
    operation.addEventListener("click", e => {
        if (num1 != null && op === null){
            display.textContent += e.target.innerHTML;
            op = e.target.innerHTML;
        }
    })
)
equalButton.addEventListener("click", e => {
    if (num1 != null && num2 != null){
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
})

decimalButton.addEventListener("click", e => {
    display.textContent += e.target.innerHTML;
})
deleteButton.addEventListener("click", e => {
    if(num1 != null && op === null)
    
    display.textContent = display.textContent.slice(0,-1)

})



