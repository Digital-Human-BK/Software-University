function sumNtoM(n, m) {
  n = Number(n);
  m = Number(m);
  let sum = 0;

  for (let i = n; i<=m; i++) {
    sum+=i;
  }
  return sum;
}
sumNtoM('-8', '20')
sumNtoM('1', '5' )