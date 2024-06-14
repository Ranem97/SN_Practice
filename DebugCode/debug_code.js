function performOperation() {
  // Get user input from input fields
  let num1 = parseInt(document.getElementById("input1").value);
  let num2 = parseInt(document.getElementById("input2").value);
  // Check if inputs are valid numbers
  if (!isNaN(num1) && !isNaN(num2)) {
    // Perform the operation
    let mul = multiply(num1, num2);
    let add = addition(num1, num2);
    let div = division(num1, num2);

    // Display the result
    displayResult(mul, add, div);
  } else {
    displayResult("Please enter valid numbers");
  }
}

function multiply(a, b) {
  // Introduce a debugger statement to pause execution
  debugger;

  // Multiply the numbers
  return a * b;
}
function addition(a, b) {
  debugger;

  return a + b;
}

function division(a, b) {
  debugger;

  return a / b;
}

function displayResult(result1, result2, result3) {
  // Display the result in the paragraph element
  const resultElement = document.getElementById("result");
  resultElement.innerHTML = `The result for multiplication is: ${result1} \n
  The result for addition is: ${result2} \n
  The Result for divition is: ${result3}`;
}
