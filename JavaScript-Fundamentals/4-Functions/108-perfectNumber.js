function perfectNumber(n) {

  let divisorsSum = 0;

  for (let i = 0; i < n; i++) {
    if (n % i === 0) {
      divisorsSum += i;
    }
  }

  if (divisorsSum === n) {
    console.log(`We have a perfect number!`);
  } else {
    console.log("It's not so perfect.");
  }
}
perfectNumber(6)
perfectNumber(28)
perfectNumber(1236498)