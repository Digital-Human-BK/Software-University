function vetParking(input) {
  let days = Number(input[0])
  let hours = Number(input[1])

  let bill = 0;
  let total = 0;

  for (let i = 1; i <= days; i++) {
    for (let j = 1; j <= hours; j++) {
      if (i % 2 == 0 && j % 2 == 1) {
        bill += 2.50;
      } else if (i % 2 == 1 && j % 2 == 0) {
        bill += 1.25;
      } else {
        bill++;
      }
    }
    console.log(`Day: ${i} - ${bill.toFixed(2)} leva`);
    total += bill;
    bill = 0;
  }
  console.log(`Total: ${total.toFixed(2)} leva`);
}
vetParking(["2", "5"])