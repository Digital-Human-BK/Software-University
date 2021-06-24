function pyramid(input) {
  let n = Number(input[0]);

  let current = 1;
  let isBigger = false;
  let printCurrentLine = "";

  for (let r = 1; r <= n; r++) {
    for (let c = 1; c <= r; c++) {
      if (current > n) {
        isBigger = true;
        break;
      }
      printCurrentLine += current + " ";
      current++;
    }
    console.log(printCurrentLine);
    printCurrentLine ="";
    if (isBigger) {
      break;
    }
  }
}


pyramid(["15"])