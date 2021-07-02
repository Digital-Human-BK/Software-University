function club(input) {
  let target = Number(input[0]);
  let index =1;
  let command = input[index];

  let orderPrice = 0;
  let total = 0;

  while (command != "Party!" && total < target) {

    let drink = input[index++];
    let drinkPrice = drink.length;
    let orderCount = Number(input[index++]);

    orderPrice +=(drinkPrice* orderCount);

    if (orderPrice % 2 ===0) {
      total+=orderPrice;
      orderPrice=0;
    } else {
      orderPrice*= 0.75;
      total +=orderPrice;
      orderPrice=0;
    }
    command = input[index];
  }

  if (total >= target) {
    console.log("Target acquired.");
    console.log(`Club income - ${total.toFixed(2)} leva.`);
  } else {
    console.log(`We need ${(target - total).toFixed(2)} leva more.`);
    console.log(`Club income - ${total.toFixed(2)} leva.`);
  }
}
club(["500",
"Bellini",
"6",
"Bamboo",
"7",
"Party!"])