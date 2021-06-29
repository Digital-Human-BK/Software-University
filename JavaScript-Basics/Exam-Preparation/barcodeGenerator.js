function barcode(input) {
  let start = input[0]
  let finish = input[1]

  let barcode = ""

  let firstStart = start.charAt(0);
  let secondStart = start.charAt(1);
  let thirdStart = start.charAt(2);
  let fourthStart = start.charAt(3);

  let firstFinish = finish.charAt(0);
  let secondFinish = finish.charAt(1);
  let thirdFinish = finish.charAt(2);
  let fourthFinish = finish.charAt(3);

  for (let a = firstStart; a <= firstFinish; a++) {
    for (let b = secondStart; b <= secondFinish; b++) {
      for (let c = thirdStart; c <= thirdFinish; c++) {
        for (let d = fourthStart; d <= fourthFinish; d++) {
          if (a % 2 != 0 && b % 2 != 0 && c % 2 != 0 && d % 2 != 0) {
            barcode += `${a}${b}${c}${d} `;
          }
        }
      }
    }
  }
  console.log(barcode);
}


barcode(["1365",
  "5877"])



