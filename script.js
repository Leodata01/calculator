// functions

let operator = "";
let lasOperator = "";
let num1 = "";
let num2 = "";
let result = "";

function operate(num1, oprator, num2) {
  num1 = parseInt(num1);
  num2 = parseInt(num2);
  switch (oprator) {
    case "+":
      result = add(num1, num2);
      break;
    case "-":
      result = substract(num1, num2);
      break;
    case "*":
      result = multiply(num1, num2);
      break;
    case "/":
      result = divide(num1, num2);
      break;
    case "%":
      result = modulus(num1, num2);
      break;
  }
}

function add(a, b) {
  return a + b;
}

function substract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function modulus(a, b) {
  return a / b;
}

// Dom manipulation

const numbersBtn = document.querySelectorAll(".number-btn");

const display = document.querySelector("#displayText");

// update number variables (0,1,2,3,4...)
numbersBtn.forEach((number) => {
  number.addEventListener("click", () => {});
});

// update operator variable ("+", "-", "x" ...)
const operatorButtons = document.querySelectorAll(".operator-btn");
const divOperator = document.querySelector("#operator");

operatorButtons.forEach((op) => {
  op.addEventListener("click", () => {});
});

// return result when "=" pressed
const equal = document.querySelector("#equal");

equal.addEventListener("click", () => {
  operate(num1, operator, num2);
  display.textContent = result;
  clearVariables();
});

// handle dot button intercation (".")
const dot = document.querySelector("#equal");

dot.addEventListener("click", () => {});

// Clear all when "Clear" pressed
const clear = document.querySelector("#clear");

clear.addEventListener("click", () => {
  clearVariables();
  display.textContent = "";
});

function clearVariables() {
  operator = "";
  num1 = "";
  num2 = "";
  result = "";
}
