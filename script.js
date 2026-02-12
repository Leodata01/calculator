// functions

let operator;
let num1 = 0;
let num2 = 0;
let result = 0;

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
  display.textContent = result;
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

// update 2 variable
numbersBtn.forEach((number) => {
  number.addEventListener("click", () => {
    num2 = number.textContent;
    display.textContent = num2;
  });
});

// update operator variable

operatorButtons = document.querySelectorAll(".operator-btn");

operatorButtons.forEach((op) => {
  op.addEventListener("click", () => {});
});

// return result when "=" pressed

const equal = document.querySelector("#equal");

equal.addEventListener("click", () => operate(num1, operator, num2));

// Clear all when "Clear" pressed
const clear = document.querySelector("#clear");

clear.addEventListener("click", () => {
  operator = "";
  num1 = 0;
  num2 = 0;
  display.textContent = "";
});
