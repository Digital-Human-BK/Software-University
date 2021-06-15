function equalPairs(input) {
  let pairsCount = Number(input[0]);
  let loopEnd = pairsCount * 2;

  let num1 = 0;
  let num2 = 0;

  for (let n = 1; n<loopEnd; n++ ) {
    let n1 = Number(input[n]);
    num1 = n1;
    console.log(num1);
    n++
  }

  for (let z = 2; z <=loopEnd; z++) {
    let n2 = Number(input[z]);
    num2 = n2
    z++
  }

  console.log(num1 + num2);
}



equalPairs(['3', '1', '2', '0', '3', '4', '-1'])