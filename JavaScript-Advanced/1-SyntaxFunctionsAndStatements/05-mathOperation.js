function mathOp(a, b, operator) {
  let result;
  if (operator == '+') {
    result = a + b;
  } else if (operator == '-') {
    result = a - b;
  } else if (operator == '*') {
    result = a * b;
  } else if (operator == '/') {
    result = a / b;
  } else if (operator == '%') {
    result = a % b
  } else if (operator == '**') {
    result = a**b;
  }
  console.log(result);
}
mathOp(5, 6, '+')
mathOp(3, 5.5, '*')