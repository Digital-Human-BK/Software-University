function cleverLily(input) {
  let age = Number(input[0]);
  let washerPrice = Number(input[1]);
  let toyPrice = Number(input[2]);

  let moneySum = 0;
  let toysSum = 0;
  let currentMoney = 10;


  for (let i = 1; i <= age; i++) {
    if (i % 2 === 0) {
      moneySum += currentMoney;
      moneySum -= 1;
      currentMoney += 10
    } else {
      toysSum++;
    }
  }

  let toysMoney = toysSum * toyPrice;

  if ((toysMoney + moneySum) >= washerPrice) {
    console.log(`Yes! ${((toysMoney + moneySum) - washerPrice).toFixed(2)}`);
  } else {
    console.log(`No! ${(washerPrice - (toysMoney + moneySum)).toFixed(2)}`);
  }
}
cleverLily(["21", "1570.98", "3"])