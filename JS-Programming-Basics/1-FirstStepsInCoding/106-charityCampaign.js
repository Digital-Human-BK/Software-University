function charity(input) {

  let daysCount = Number(input[0]);
  let bakersCount = Number(input[1]);
  let cakesCount = Number(input[2]);
  let wafflesCount = Number(input[3]);
  let pancakesCount = Number(input[4]);

  let cakesPerDaySum = cakesCount * 45;
  let wafflesPerDaySum = wafflesCount * 5.80;
  let pancakesPerDaySum = pancakesCount * 3.20;

  let allBakersDailyProduction = (cakesPerDaySum + wafflesPerDaySum + pancakesPerDaySum) * bakersCount;

  let totalSum = allBakersDailyProduction * daysCount;

  let finalSum = totalSum - (totalSum / 8);

  console.log(finalSum);
}

charity(['23', '8', '14', '30', '16'])