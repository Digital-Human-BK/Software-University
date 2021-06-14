function divide(input) {
  let numsCount = Number(input[0]);

  let p1 = 0;
  let p2 = 0;
  let p3 = 0;

  for (let i = 1; i <= numsCount; i++) {
    let currentNumber = (input[i]);
    if (currentNumber % 2 === 0) {
      p1++;
    }
    if (currentNumber % 3 === 0) {
      p2++;
    }
    if (currentNumber % 4 === 0) {
      p3++;
    }
  }

  console.log(`${(p1 / numsCount * 100).toFixed(2)}%`);
  console.log(`${(p2 / numsCount * 100).toFixed(2)}%`);
  console.log(`${(p3 / numsCount * 100).toFixed(2)}%`);
}

divide(["10",
  "680",
  "2",
  "600",
  "200",
  "800",
  "799",
  "199",
  "46",
  "128",
  "65"])
