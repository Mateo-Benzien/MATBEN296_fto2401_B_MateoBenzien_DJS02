const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);

  // Scenario: Validation when values are missing
  if (!dividend || !divider) {
    result.innerText = "Division not performed. Both values are required in inputs. Try again";
    return;
  }

  // Scenario: An invalid division should log an error in the console
  if (divider == 0 || isNaN(dividend) || isNaN(divider)) {
    result.innerText = "Division not performed. Invalid number provided. Try again";
    console.error("Error: Invalid division");
    return;
  }

  // Scenario: Providing anything that is not a number should crash the program
  if (isNaN(dividend) || isNaN(divider)) {
    document.body.innerHTML = "<h1>Something critical went wrong. Please reload the page</h1>";
    console.error("Error: Non-numeric input detected");
    return;
  }

  // Perform division
  const divisionResult = dividend / divider;

  // Scenario: Dividing numbers result in a whole number
  if (divisionResult % 1 !== 0) {
    result.innerText = divisionResult;
  } else {
    // Scenario: Dividing numbers result in a decimal number
    result.innerText = Math.trunc(divisionResult);
  }
});
