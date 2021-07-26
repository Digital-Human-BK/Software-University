function printSum(numOne, numTwo) {
  let sum = 0;
  let numsLine = "";

  for (let i = numOne; i <=numTwo; i++) {
    sum+=i;
    numsLine+=i + " ";
  }
  console.log(numsLine);
  console.log(`Sum: ${sum}`);
}
printSum(0, 26)