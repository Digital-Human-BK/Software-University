function bday(input) {

  let rent = Number(input[0]);
  let cake = rent * 0.2;
  let drinks = cake - (cake * 0.45);
  let animator = rent / 3;

  let totalPrice= rent + cake + drinks +animator;

  console.log(totalPrice);

}

bday(['2250'])