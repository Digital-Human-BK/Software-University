function factorial(input) {
  let n = Number(input[0]);
  let sum = 1;

  for (let i = 1; i <= n; i++) {
    sum = sum * i;
  }
  console.log(sum);
}
factorial(['4'])