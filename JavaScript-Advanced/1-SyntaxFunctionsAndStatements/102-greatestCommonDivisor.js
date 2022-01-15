function greatestCommonDivisor(a, b) {
  let n = Math.min(a, b);
  let gcd = 0;

  for (let i = 1; i <= n; i++) {
    if (a % i == 0 && b % i == 0) {
      gcd = i
    }
  }
  console.log(gcd);
}
greatestCommonDivisor(15, 5)
greatestCommonDivisor(2154, 458)