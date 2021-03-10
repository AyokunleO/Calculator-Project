// Your task is to add interactivity to the Calculator UI given. 
// User Story
// The user will enter numeric values in the input elements of type number.
// To have the result, the user would click on any of the five buttons *, -, +, /, %
// Based on the button clicked, your app should perform the expected calculation and display the answer in the input element of type text.
// Best of luck!

function getElement(elementId){
    return document.getElementById(elementId);
}
// Number Values
const txtResult = getElement("txtResult");
const txtNum1 = getElement("txtNum1"); 
const txtNum2 = getElement("txtNum2");

// Operator values

const btnSum = getElement("btnSum");
const btnMinus = getElement("btnMinus");
const btnMultiply = getElement("btnMultiply");
const btnDivide = getElement("btnDivide");
const btnModulo = getElement("btnModulo");

// Bind to event listener
btnSum.addEventListener("click", calculate);
btnMinus.addEventListener("click", calculate);
btnMultiply.addEventListener("click", calculate);
btnDivide.addEventListener("click", calculate);
btnModulo.addEventListener("click", calculate);

// Operators
function sum(num1, num2) {
    return num1 + num2;
}
function minus(num1, num2) {
    return num1 - num2;
}
function multiply(num1, num2) {
    return num1 * num2;
}
function divide(num1, num2) {
    if (num2 ==0){
        return "Cannot divide a number by zero";
    }else{
        return num1 / num2;
    }
}
function modulo(num1, num2) {
    if(num2 == 0){
        return "Cannot modulo a number by zero";
    }else{
        return num1 % num2;
    }
}

//Function to compute task
function calculate() {
    let num1 = parseInt(getElement("txtNum1").value);
    let num2 = parseInt(getElement("txtNum2").value);

    let sign = event.target.value;

    if(sign == "+")
    {getElement("txtResult").value = sum(num1, num2)}
    else if (sign == "-")
    {getElement("txtResult").value = minus(num1, num2)}
    else if(sign == "*")
    {getElement("txtResult").value = multiply(num1, num2)}
    else if (sign == "/")
    {getElement("txtResult").value = divide(num1, num2)}
    else {getElement("txtResult").value = modulo(num1, num2)}
}