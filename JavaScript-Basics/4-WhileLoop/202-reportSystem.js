function reportSystem(input) {
  let target = Number(input[0]);
  let index = 1;
  let command = input[index];

  let cashSum = 0;
  let cardSum = 0;
  let averageCash = 0;
  let averageCard = 0;

  while (command != 'End') {
    let cashPayment = Number(input[index++]);
    let cardPayment = Number(input[index]);

    if (cashPayment > 100) {
      console.log('Error in transaction!');
    } else {
      console.log('Product sold!');
      cashSum +=cashPayment;
      averageCash++;
    }

    if ( cardPayment <10) {
      console.log('Error in transaction!');
    } else {
      console.log('Product sold!');
      cardSum += cardPayment;
      averageCard++;
    }

    if (cashSum + cardSum >= target) {
      console.log(`Average CS: ${(cashSum / averageCash).toFixed(2)}`);
      console.log(`Average CC: ${(cardSum / averageCard).toFixed(2)}`);
      break;
    } 
    index++;
    command = input[index]; 
  }

  if (command === 'End') {
      console.log("Failed to collect required money for charity.");
  }
}



reportSystem(['600', '86', '150', '98', '227', 'End'])