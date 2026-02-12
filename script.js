// general variables
let operator = "";
let num1 = "";
let num2 = "";
// Calculation functions
function operate(num1, num2, operator) {
  //
  const floatNum1 = parseFloat(num1);
  const floatNum2 = parseFloat(num2);
  let result;
  switch (operator) {
    case "+":
      result = add(floatNum1, floatNum2);
      break;
    case "-":
      result = substract(floatNum1, floatNum2);
      break;
    case "*":
      result = multiply(floatNum1, floatNum2);
      break;
    case "/":
      result = divide(floatNum1, floatNum2);
      break;
    case "%":
      result = modulus(floatNum1, floatNum2);
      break;
  }
  return result;
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

function updateNumber(btn) {
  num1 += btn.textContent;
  display.textContent = num1;
}

numbersBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    updateNumber(btn);
  });
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
