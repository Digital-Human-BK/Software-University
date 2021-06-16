function accountBalance(input) {
  let totalSum = 0;

  let index = 0;
  let deposit = input[index];
  index++;

  while (deposit !== "NoMoreMoney") {
    let currentSum = Number(deposit);

    if (currentSum < 0) {
      console.log("Invalid operation!");
      break;
    }
    console.log(`Increase: ${currentSum.toFixed(2)}`);
    totalSum += currentSum;

    deposit = input[index];
    index++;
  }
  console.log(`Total: ${totalSum.toFixed(2)}`);
}

accountBalance(["120",
"45.55",
"-150"])
