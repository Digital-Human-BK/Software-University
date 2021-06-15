function gameOfIntervals(input) {
  let moves = Number(input[0]);

  let endResult = 0;
  let range09 = 0;
  let range1019 = 0;
  let range2029 = 0;
  let range3039 = 0;
  let range4050 = 0;
  let rangeInvalid = 0;

  for (let i = 1; i <= moves; i++) {

    let currentNumber = Number(input[i]);

    if (currentNumber >= 0 && currentNumber <= 9) {
      endResult = endResult + (currentNumber * 0.2);
      range09++;
    } else if (currentNumber >= 10 && currentNumber <= 19) {
      endResult = endResult + (currentNumber * 0.3);
      range1019++;
    } else if (currentNumber >= 20 && currentNumber <= 29) {
      endResult = endResult + (currentNumber * 0.4);
      range2029++;
    } else if (currentNumber >= 30 && currentNumber <= 39) {
      endResult += 50;
      range3039++;
    } else if (currentNumber >= 40 && currentNumber <= 50) {
      endResult += 100;
      range4050++;
    } else {
      endResult = endResult / 2;
      rangeInvalid++;
    }
  }
  console.log(endResult.toFixed(2));
  console.log(`From 0 to 9: ${(range09 / moves * 100).toFixed(2)}%`);
  console.log(`From 10 to 19: ${(range1019 / moves * 100).toFixed(2)}%`);
  console.log(`From 20 to 29: ${(range2029 / moves * 100).toFixed(2)}%`);
  console.log(`From 30 to 39: ${(range3039 / moves * 100).toFixed(2)}%`);
  console.log(`From 40 to 50: ${(range4050 / moves * 100).toFixed(2)}%`);
  console.log(`Invalid numbers: ${(rangeInvalid / moves * 100).toFixed(2)}%`);
}

gameOfIntervals(['10', '43', '57', '-12', '23', '12', '0', '50', '40', '30', '20'])