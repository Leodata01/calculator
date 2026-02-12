// functions

let oprator;
let num1;
let num2;

function operate(num1, oprator, num2) {
  let result = 0;
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
    case "/":
      result = modulus(num1, num2);
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
