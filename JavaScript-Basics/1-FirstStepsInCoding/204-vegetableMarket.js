function vegMarket(arg1, arg2, arg3, arg4) {

  let vegPricePerKg = Number(arg1);
  let fruitPricePerKg = Number(arg2);
  let vegTotalKg = Number(arg3);
  let fruitTotalKg = Number(arg4);

  let vegProfit = vegPricePerKg * vegTotalKg;
  let fruitProfit = fruitPricePerKg * fruitTotalKg;
  let totalProfitLv = vegProfit + fruitProfit;
  let totalProfitEu = totalProfitLv / 1.94;

  console.log(totalProfitEu.toFixed(2));

}


vegMarket('0.194', '19.4', '10', '10')