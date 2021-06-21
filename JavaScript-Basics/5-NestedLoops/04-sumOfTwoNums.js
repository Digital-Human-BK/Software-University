function sumTwo(input) {
  let start = Number(input[0]);
  let end = Number(input[1]);
  let magicNum = Number(input[2]);

  let sum =0;
  let counter = 0;
  let isFound = false;

  for (let i = start; i <= end; i++) {
    for (let y = start; y <= end; y++) {
      counter++;
      if (i + y === magicNum) {
        console.log(`Combination N:${counter} (${i} + ${y} = ${magicNum})`);
        sum = i + y;
        isFound = true;
      }
    }
    if(isFound){
      break;
    }
  }
  if (sum !== magicNum) {
    console.log(`${counter} combinations - neither equals ${magicNum}`);
  }
}


sumTwo(["23",
"24",
"20"])
