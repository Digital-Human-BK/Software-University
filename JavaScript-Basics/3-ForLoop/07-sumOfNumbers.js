function sumOfNumbers(input) {
  let n = (input[0]) +'';
  let sum = 0;
  for (let i = 0; i < n.length; i++) {
    let num = Number(n[i]);
    sum += num;
  }
  console.log(`The sum of the digits is:${sum}`);
}
sumOfNumbers(["5648915"])