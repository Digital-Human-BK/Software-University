function toyShop(parameters) {
  let tripPrice = Number(parameters[0]);
  let puzzlesCount = Number(parameters[1]);
  let dollsCount = Number(parameters[2]);
  let bearsCount = Number(parameters[3]);
  let minionsCount = Number(parameters[4]);
  let trucksCount = Number(parameters[5]);

  let toysCount = puzzlesCount + dollsCount + bearsCount + minionsCount + trucksCount;
  let toysPrice = puzzlesCount * 2.6 + dollsCount * 3 + bearsCount * 4.1 + minionsCount * 8.2 + trucksCount * 2;

  if (toysCount >= 50) {
    toysPrice = toysPrice * 0.75;
  } else {
    toysPrice = toysPrice;
  }

  let profit = toysPrice * 0.9;

  if (profit >= tripPrice) {
    console.log(`Yes! ${(profit - tripPrice).toFixed(2)} lv left.`);
  } else {
    console.log(`Not enough money! ${Math.abs(profit - tripPrice).toFixed(2)} lv needed.`);
  }

}
toyShop(["320", "8", "2", "5", "5", "1"])