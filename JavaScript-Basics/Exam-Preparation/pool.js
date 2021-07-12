function pool(input) {
  let people = Number(input[0])
  let taxEnter = Number(input[1])
  let sunbedPrice = Number(input[2])
  let umbrellaPrice = Number(input[3])

  let enterTaxTotal = taxEnter * people;
  let umbrellaTax = Math.ceil(people * 0.5) * umbrellaPrice;
  let sunbedTax = Math.ceil(people* 0.75)*sunbedPrice;

  console.log(`${(enterTaxTotal + umbrellaTax + sunbedTax).toFixed(2)} lv.`);
}


pool(["21",
"5.50",
"4.40",
"6.20"])