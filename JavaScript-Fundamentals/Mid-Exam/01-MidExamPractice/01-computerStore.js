function computerStore(array) {
  let totalPrice = 0;
  let type = "";
  for (const line of array) {
    if (line == "special" || line == "regular") {
      type = line;
      break;
    }

    let price = Number(line);

    if (price < 0) {
      console.log("Invalid price!");
      continue;
    }
    totalPrice += price;
  }
  let taxes = totalPrice * 0.2;

  if (totalPrice == 0) {
    console.log("Invalid order!");
  } else if (type == "special"){
    console.log(`Congratulations you've just bought a new computer!
    Price without taxes: ${totalPrice.toFixed(2)}$
    Taxes: ${taxes.toFixed(2)}$
    -----------
    Total price: ${((totalPrice + taxes) * 0.9).toFixed(2)}$
    `);
  } else if (type == "regular") {
    console.log(`Congratulations you've just bought a new computer!
    Price without taxes: ${totalPrice.toFixed(2)}$
    Taxes: ${taxes.toFixed(2)}$
    -----------
    Total price: ${(totalPrice + taxes).toFixed(2)}$
    `);
  }
}
computerStore([
  '1050',
  '200',
  '450',
  '2',
  '18.50',
  '16.86',
  'special'
]);
computerStore([
  '1023',
  '15',
  '-20',
  '-5.50',
  '450',
  '20',
  '17.66',
  '19.30', 'regular'
]);
computerStore([
  'regular'
])