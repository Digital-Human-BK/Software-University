function spice(n) {
  let total = 0;
  let days = 0;
  while (n >= 100) {
    days++;
    total += n - 26;
    n -= 10;
  }
  if (days != 0) {
    total -=26;
  }
  console.log(days);
  console.log(total);
}
spice(111)