function specialNumbers(input) {
  let num = Number(input[0])
  let printLine = "";
  let counter = 0;

  for (let i = 1111; i <= 9999; i++) {
    let currentNum = "" + i;
    for (let j = 0; j < currentNum.length; j++) {
      let digit = Number(currentNum.charAt(j));

      if (num % digit === 0) {
        counter++;
      } else {
        counter = 0;
        break;
      }

    }

    if (counter === 4) {
      counter = 0;
      printLine += ` ${i}`
    }
  }
  console.log(printLine);
}
specialNumbers(["16"])