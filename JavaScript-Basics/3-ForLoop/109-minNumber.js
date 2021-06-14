function minNumber(input) {
  let numsCount = Number(input[0]);

  let minNumber = Number.MAX_SAFE_INTEGER;

  for (let i = 1; i <= numsCount; i++) {

    let currentNumber = Number(input[i]);

    if (currentNumber < minNumber) {
        minNumber = currentNumber;
    }

  }
  console.log(minNumber);
}
minNumber(["4",
  "45",
  "-20",
  "7",
  "-30"])
