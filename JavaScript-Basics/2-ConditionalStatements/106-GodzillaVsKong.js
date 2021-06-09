function movieTime(input) {
  let budget = Number(input[0]);
  let staffCount = Number(input[1]);
  let costumePrice = Number(input[2]);

  let decorPrice = budget * 0.1;
  let totalCostumesPrice = costumePrice * staffCount;

  if (staffCount >= 150) {
    totalCostumesPrice = totalCostumesPrice * 0.9;
  } else {
    totalCostumesPrice = totalCostumesPrice;
  }

  if (totalCostumesPrice + decorPrice <= budget) {
    console.log('Action!');
    console.log(`Wingard starts filming with ${(budget - (totalCostumesPrice + decorPrice)).toFixed(2)} leva left.`);
  } else {
    console.log("Not enough money!")
    console.log(`Wingard needs ${((totalCostumesPrice + decorPrice) - budget).toFixed(2)} leva more.`);
  }
}
movieTime(["20000",
"120",
"55.5"])


