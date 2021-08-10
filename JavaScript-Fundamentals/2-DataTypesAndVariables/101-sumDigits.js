function sumDigits(n) {
  n = n.toString();
  let sum = 0;
  for (let i = 0; i < n.length; i++) {
    sum +=Number(n.charAt(i));
  }
  console.log(sum);
}
sumDigits(245678)
sumDigits(97561)
sumDigits(543)