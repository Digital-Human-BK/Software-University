function maxNumber(input) {
  index = 0;
  let num = input[index];
  index++;

  let maxNum = Number.MIN_SAFE_INTEGER;
  while ( num !== "Stop") {
    
    let currentNum = Number(num);

    if (currentNum > maxNum) {
      maxNum = currentNum;
    }
    num = input[index];
    index++;
  }
  console.log(maxNum);
}
maxNumber(["100",
"99",
"80",
"70",
"Stop"])
