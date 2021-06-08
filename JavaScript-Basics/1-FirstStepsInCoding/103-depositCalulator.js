function depositCalculator(input) {

  let depositSum = Number(input[0]);
  let depositTime = Number(input[1]);
  let interestRate = Number(input[2]);

  finalSum = depositSum + depositTime * ((depositSum * interestRate/100) / 12);
  console.log(finalSum);
}


depositCalculator(['200', '3', '5.7'])