function prime(input) {
  let index = 0;
  let command = input[index];
  let primeSum = 0;
  let nonPrimeSum = 0;


  while (command != "stop") {
    let currentNum = Number(input[index++])
    if (currentNum < 0) {
      console.log("Number is negative.");
      command=input[index];
      continue;
    } else if (currentNum === 2) {
      primeSum += currentNum;
      command=input[index];
      continue;
    } else if (currentNum === 1) {
      nonPrimeSum += currentNum;
      command=input[index];
      continue;
    } else if (currentNum === 0) {
      nonPrimeSum += currentNum;
      command=input[index];
      continue;
    } else {
      for (let x = 2; x < currentNum; x++) {
        if (currentNum % x === 0) {
          nonPrimeSum += currentNum;
          currentNum = 0;
          break;
        }
      }
      primeSum += currentNum;
    }
    command = input[index];
  }
  console.log(`Sum of all prime numbers is: ${primeSum}`);
  console.log(`Sum of all non prime numbers is: ${nonPrimeSum}`);
}
prime(["3",
"9",
"0",
"7",
"19",
"4",
"stop"])




