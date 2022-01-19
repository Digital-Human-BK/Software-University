function lastK(n, k) {
  let result = [1];
  for (let i = 0; i < n; i++) {
    let sum;
    if (k > i) {
      sum = result.slice(0, i+1);
    } else {
      sum = result.slice(i-k, i+1);
    }
    sum = sum.reduce((a, b) => a + b);
    result[i] = sum;
  }
  return result;
}
lastK(6, 3)
lastK(8, 2)