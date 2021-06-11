function numbers(solve) {
  let n1 = Number(solve[0]);
  let n2 = Number(solve[1]);
  let operator = solve[2];

  let result = '';

  if (operator == '+') {
    if ((n1 + n2) % 2 == 0) {
      result = 'even';
      console.log(`${n1} ${operator} ${n2} = ${n1 + n2} - ${result}`);
    } else {
      result = 'odd';
      console.log(`${n1} ${operator} ${n2} = ${n1 + n2} - ${result}`);
    }
  } else if (operator == '-') {
    if ((n1 - n2) % 2 == 0) {
      result = 'even';
      console.log(`${n1} ${operator} ${n2} = ${n1 - n2} - ${result}`);
    } else {
      result = 'odd';
      console.log(`${n1} ${operator} ${n2} = ${n1 - n2} - ${result}`);
    }
  } else if (operator =='*') {
    if ( (n1 * n2) % 2 == 0 ) {
      result = 'even';
      console.log(`${n1} ${operator} ${n2} = ${n1 * n2} - ${result}`);
      } else {
        result ='odd';
      console.log(`${n1} ${operator} ${n2} = ${n1 * n2} - ${result}`);
      }
  } else if (operator == '/') {
    if (n2 != 0) {
      console.log(`${n1} / ${n2} = ${(n1 / n2).toFixed(2)}`);
    } else {
      console.log(`Cannot divide ${n1} by zero`);
    }
  } else if (operator == '%') {
    if (n2 != 0) {
      console.log(`${n1} % ${n2} = ${n1 % n2}`);
    } else {
      console.log(`Cannot divide ${n1} by zero`);
    }
  }
}


numbers(["10",
"0",
"%"])





