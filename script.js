// general variables
let operator = "";
let num1 = "";
let num2 = "";
let result = 0;
// Calculation functions
function operate(num1, num2, operator) {
  //
  const floatNum1 = parseFloat(num1);
  const floatNum2 = parseFloat(num2);
  let result = 0;
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
  if (typeof result !== "number") return 0;

  return roundTwoDecimals(result);
}
function roundTwoDecimals(num) {
  return Math.round(num * 100) / 100;
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
  if (b === 0)
    return (
      alert("You are dumb as fuck you try to divid by 0 go Home! "),
      clear
    );
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
  if (operator === "") {
    num1 += btn.textContent;
    display.textContent = num1;
    console.log("number 1: " + num1);
  } else {
    num2 += btn.textContent;
    display.textContent = num2;
    console.log("number 2: " + num2);
  }
}
numbersBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    clearOperatorsColor();
    updateNumber(btn);
  });
});

// update operator variable ("+", "-", "x" ...)
const operatorButtons = document.querySelectorAll(".operator-btn");

operatorButtons.forEach((op) => {
  op.addEventListener("click", () => {
    // style button
    clearOperatorsColor();
    op.style.backgroundColor = "orange";

    if (num1 === "") return;

    if (num2 !== "") {
      result = operate(num1, num2, operator);
      display.textContent = result;
      num1 = result;
      num2 = "";
    }

    operator = op.textContent;
    console.log(operator);
  });
});

// return result when "=" pressed
const equal = document.querySelector("#equal");

equal.addEventListener("click", () => {
  if (num1 === "" || num2 === "" || operator === "") {
    display.textContent = result;
  } else display.textContent = operate(num1, num2, operator);

  clear();
});

// handle dot button intercation (".")
function checkDot(num) {
  if (num === "") {
    num = "0.";
    display.textContent = num;
  } else if (num.includes(".")) {
    return;
  } else {
    num += ".";
    display.textContent = num;
    console.log("number 1: " + num);
  }
}

// Clear all when "Clear" pressed
const clearBtn = document.querySelector("#clear");

clearBtn.addEventListener("click", () => {
  clear();
  display.textContent = "";
});

function clear() {
  operator = "";
  num1 = "";
  num2 = "";
  result = 0;
  clearOperatorsColor();
}

function clearOperatorsColor() {
  operatorButtons.forEach((op) => {
    op.style.backgroundColor = "";
  });
}
