function minNumber(input) {
  let index = 0;
  let num = input[index];
  index++;

  let minNum = Number.MAX_SAFE_INTEGER;

  while (num !== "Stop") {

    let currentNum = Number(num);

    if (currentNum < minNum) {
      minNum = currentNum;
    }
    num = input[index];
    index++;
  }
  console.log(minNum);
}
minNumber(["45",
"-20",
"7",
"99",
"Stop"])

