function fruits(input) {

  let strawberryPrice = Number(input[0]);
  let bananasKg = Number(input[1]);
  let orangesKg = Number(input[2]);
  let raspberryKg = Number(input[3]);
  let strawberryKg = Number(input[4]);

  let raspberryPrice = strawberryPrice * 0.5;
  let orangesPrice = raspberryPrice - (raspberryPrice * 0.4);
  let bananasPrice = raspberryPrice - (raspberryPrice * 0.8);

  let strawberryTotal = strawberryPrice * strawberryKg;
  let bananasTotal = bananasPrice * bananasKg;
  let orangesTotal = orangesPrice * orangesKg;
  let raspberryTotal = raspberryPrice * raspberryKg;

  let totalToPay = strawberryTotal + bananasTotal + orangesTotal + raspberryTotal;
  
  console.log(totalToPay);

}


fruits(['48', '10', '3.3', '6.5', '1.7'])