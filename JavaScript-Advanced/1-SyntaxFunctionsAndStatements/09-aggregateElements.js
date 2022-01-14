function aggregateElements(input) {
  //calculate sum
  let sum = input.reduce((a, b) => a + b);
  console.log(sum);
  
  //calculate sum of inversed numbers
  let inversedSum = 0;
  for (const n of input) {
    inversedSum += 1 / n;
  }
  console.log(inversedSum);

  //concatenate numbers
  console.log(input.join(''));
}
aggregateElements([1, 2, 3])
aggregateElements([2, 4, 8, 16])