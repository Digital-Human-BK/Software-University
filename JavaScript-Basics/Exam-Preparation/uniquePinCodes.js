function pinCode(input) {
  let maxNum1 = Number(input[0])
  let maxNum2 = Number(input[1])
  let maxNum3 = Number(input[2])

  for (let a = 1; a <= maxNum1; a++) {
    for (let b = 1; b <= maxNum2; b++) {
      for (let c = 1; c <= maxNum3; c++) {
        if (a % 2 === 0 && b >= 2 && b <= 7 && c % 2 === 0) {
          console.log(`${a} ${b} ${c}`);
        }
      }
    }
  }

}
pinCode(["3", "5", "5"])