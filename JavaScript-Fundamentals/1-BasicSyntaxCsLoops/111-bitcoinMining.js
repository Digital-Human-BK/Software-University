function bitcoin(input) {
  let index = 0;
  let money = 0;
  let bitcoin = 0;
  let day = 0;
  let counter = 0;

  for (let i = 1; i <= input.length; i++) {
    let todaysGold = input[index++];
    if (i % 3 === 0) {
      money += (todaysGold * 67.51) * 0.7;
    } else {
      money += todaysGold * 67.51;
    }

    if (money >= 11949.16) {
      counter++
      bitcoin += Math.floor(money / 11949.16);
      money -= Math.floor(money / 11949.16) * 11949.16;
      if (counter === 1) {
        day = i;
      }
    }
  }
  console.log(`Bought bitcoins: ${bitcoin}`);
  if (bitcoin > 0) {
    console.log(`Day of the first purchased bitcoin: ${day}`);
  }
  console.log(`Left money: ${money.toFixed(2)} lv.`);
}
bitcoin([3124.15,
  504.212,
  2511.124])