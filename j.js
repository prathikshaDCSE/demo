const display = document.getElementById("display");

//display a number
function appendNumber(number){
    display.value += number;

}



// clear
function clearDisplay(){
    display.value = '';

}

// operator
function appendOperator(operator) {
    const currentDisplayValue = display.value;
        display.value += operator;
    }


//calculate
function calculate() {
    const expression = display.value;

    // Check if expression ends with an operator
    const lastChar = expression.slice(-1);
    const operators = ['+', '-', '*', '/'];
    if (operators.includes(lastChar)) {
        display.value = "Error: Invalid Input.";
        return; // Exit the function
    }

    // Evaluate the expression and display the result
    try {
        const result = eval(expression);
        display.value = result;
    } catch (error) {
        display.value = "Error: Invalid expression";
    }
}
