function jansNotation(arr) {
  let storedNums = [];

  for (const item of arr) {
    if (isNaN(item)) {
      const operator = item;

      if (storedNums.length >= 2) {
        let [a, b] = storedNums.splice(-2);
        storedNums.push(caclulate(a, b, operator));
      } else {
        console.log(`Error: not enough operands!`);
        storedNums.length = 0;
        break;
      }

    } else {
      storedNums.push(item);
    }
  }

  if (storedNums.length == 1) {
    console.log(storedNums[0]);
  } else if (storedNums.length > 1) {
    console.log("Error: too many operands!");
  }


  //functions
  function caclulate(a, b, operator) {
    let operators = {
      '+': (a, b) => a + b,
      '-': (a, b) => a - b,
      '*': (a, b) => a * b,
      '/': (a, b) => a / b
    }

    return operators[operator](a, b);
  }
}
jansNotation([3,
  4,
  '+']
)
jansNotation([5,
  3,
  4,
  '*',
  '-']
)
jansNotation([7,
  33,
  8,
  '-']
)
jansNotation([15,
  '/']
)