function basketball(input) {
  let annualTax = Number(input[0]);

  let trainers = annualTax * 0.6;
  let suit = trainers * 0.8;
  let ball = suit / 4;
  let accessories = ball / 5;

  let totalPrice = trainers + suit + ball + accessories + annualTax;

  console.log(totalPrice.toFixed(2));
}

basketball(["320"])