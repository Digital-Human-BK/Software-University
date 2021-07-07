function goldMine(input) {
  let locations = Number(input[0]);
  let index = 1;

  let gold = 0;

  for (let i = 1; i <= locations; i++) {
    let goldTarget = Number(input[index++]);
    let dayWork = Number(input[index++]);
    for (let j = 1; j <= dayWork; j++) {
      let todaysGold = Number(input[index++]);
      gold += todaysGold;
    }
    if ((gold / dayWork) >= goldTarget) {
      console.log(`Good job! Average gold per day: ${(gold / dayWork).toFixed(2)}.`);
      gold = 0;
    } else {
      console.log(`You need ${(goldTarget - (gold / dayWork)).toFixed(2)} gold.`);
      gold=0;
    }
  }
}
goldMine(["1",
"5",
"3",
"10",
"1",
"3"])

