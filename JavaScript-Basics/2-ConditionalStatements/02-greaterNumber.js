function greatherNumber(parameters) {
  let firstNumber = Number(parameters[0]);
  let secondNumber = Number(parameters[1]);

  if (firstNumber > secondNumber) {
    console.log(firstNumber);
  } else {
    console.log(secondNumber);
  }
}
greatherNumber(["5", "3"])