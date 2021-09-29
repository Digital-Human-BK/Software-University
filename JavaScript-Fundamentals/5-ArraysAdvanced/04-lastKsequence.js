function lastKsequence(n, k) {
  let result = [1]
  for (let i = 1; i < n; i++) {

    let sum = 0;
    let lastK = result.slice(-k);
    for (const digit of lastK) {
      sum+=digit;      
    }
    result.push(sum);
  }

  return result.join(" ");
}
console.log(lastKsequence(8, 2));