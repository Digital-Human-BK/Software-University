function vacation(input) {
  let target = Number(input[0]);
  let accountBalance = Number(input[1]);
  let index = 2;

  let spend = 0;
  let days = 0;

  while (accountBalance < target) {

    let action = input[index++];
    let amount = Number(input[index]);

    if (action === 'spend') {
      accountBalance -= amount;
      if (accountBalance < 0) {
        accountBalance = 0;
      }
      days++;
      spend++;
    } else if (action === 'save') {
      accountBalance +=amount;
      spend = 0;
      days++;
    }

    if (spend === 5) {
      console.log("You can't save the money.");
      console.log(days);
      break;
    }
    index++;
  }
  if (accountBalance >= target) {
    console.log(`You saved the money for ${days} days.`);
  }
}
vacation(["250",
"150",
"spend",
"50",
"spend",
"50",
"save",
"100",
"save",
"100"])



