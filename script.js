const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");

let currentInput = "0";
let operator = "";
let firstValue = "";
let secondValue = "";

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.getAttribute("data-value");

    if (value === "C") {
      currentInput = "0";
      firstValue = "";
      secondValue = "";
      operator = "";
    } 
    else if (value === "=") {
      if (operator && firstValue !== "") {
        secondValue = currentInput;
        currentInput = eval(`${firstValue} ${operator} ${secondValue}`);
        operator = "";
        firstValue = "";
      }
    } 
    else if (["+", "-", "*", "/"].includes(value)) {
      operator = value;
      firstValue = currentInput;
      currentInput = "";
    } 
    else {
      currentInput = currentInput === "0" ? value : currentInput + value;
    }

    display.textContent = currentInput;
  });
});
