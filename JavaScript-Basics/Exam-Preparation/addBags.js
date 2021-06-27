function addBags(input) {
  let bagsPrice = Number(input[0])
  let bagsKg = Number(input[1])
  let daysTo = Number(input[2])
  let bagsCount = Number(input[3])

  let lastBagsPrice = 0

  if (bagsKg < 10) {
    lastBagsPrice = (bagsPrice * 0.2) * bagsCount;
  } else if (bagsKg <= 20) {
    lastBagsPrice = (bagsPrice * 0.5) * bagsCount;
  } else {
    lastBagsPrice = bagsPrice * bagsCount;
  }

  if (daysTo < 7) {
    lastBagsPrice *= 1.4;
  } else if (daysTo <= 30) {
    lastBagsPrice *= 1.15;
  } else {
    lastBagsPrice *= 1.1;
  }
  console.log(`The total price of bags is: ${lastBagsPrice.toFixed(2)} lv.`);
}


addBags(["25.5", "5", "36", "6"])