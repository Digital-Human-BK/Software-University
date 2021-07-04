function fishchips(input) {
  let name = input[0]
  let budget = Number(input[1])
  let beerBottles = Number(input[2])
  let chipsPacks = Number(input[3])

  let beerPrice = beerBottles * 1.20;
  let chipsPricePerPack = beerPrice * 0.45;
  let chipsPrice = Math.ceil(chipsPacks * chipsPricePerPack);

  let total = beerPrice+chipsPrice;

  if (total<=budget){
    console.log(`${name} bought a snack and has ${(budget-total).toFixed(2)} leva left.`);
  } else {
    console.log(`${name} needs ${(total-budget).toFixed(2)} more leva!`);
  }
}
fishchips(["George",
  "10",
  "2",
  "3"
])