function shop(input) {
  let magnolia = Number(input[0]);
  let zumbul = Number(input[1]);
  let rose = Number(input[2]);
  let cactus = Number(input[3]);
  let giftPrice = Number(input[4]);

  let magnoliaTotal = magnolia * 3.25;
  let zumbulTotal = zumbul * 4;
  let roseTotal = rose * 3.5;
  let cactusTotal = cactus * 8;

  let orderTotal = (magnoliaTotal + zumbulTotal + roseTotal + cactusTotal) * 0.95;

  if (orderTotal >= giftPrice) {
    console.log(`She is left with ${Math.floor(orderTotal - giftPrice)} leva.`);
  } else {
    console.log(`She will have to borrow ${Math.ceil(giftPrice - orderTotal)} leva.`);
  }
}
shop(["15",
  "7",
  "5",
  "10",
  "100"])