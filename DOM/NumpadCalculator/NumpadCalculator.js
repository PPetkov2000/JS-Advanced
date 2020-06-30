function solve() {
  const keys = document.querySelector(".keys");
  const expressionOutput = document.querySelector("#expressionOutput");
  const resultOutput = document.querySelector("#resultOutput");
  const clearButton = document.querySelector(".clear");
  let firstNumber = "";
  let secondNumber = "";
  let operator = "";

  const calculator = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => a / b
  };

  Array.from(keys.querySelectorAll("button")).map(btn =>
    btn.addEventListener("click", function(event) {
      let btnValue = event.target.value;

      clearButton.addEventListener("click", function() {
        (firstNumber = ""),
          (secondNumber = ""),
          (operator = ""),
          (expressionOutput.textContent = ""),
          (resultOutput.textContent = "");
      });

      if (Number(btnValue) || btnValue === "." || btnValue === "0") {
        if (!operator) {
          firstNumber += btnValue;
          expressionOutput.textContent += btnValue;
        } else {
          secondNumber += btnValue;
          expressionOutput.textContent += btnValue;
        }
      } else if (calculator.hasOwnProperty(btnValue)) {
        operator = btnValue;
        expressionOutput.textContent += ` ${operator} `;
      } else if (btnValue === "=") {
        if (Number(firstNumber) && Number(secondNumber)) {
          resultOutput.textContent = calculator[operator](
            Number(firstNumber),
            Number(secondNumber)
          );
        } else {
          resultOutput.textContent = "NaN";
        }
      }
    })
  );
}
solve();
